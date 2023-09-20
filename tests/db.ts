import { Prisma, PrismaClient } from "@prisma/client";
import { exec } from "child_process";
import * as util from "util";

const execPromisify = util.promisify(exec);
const prisma = new PrismaClient();

const tables = Prisma.dmmf.datamodel.models
  .map((model) => model.dbName)
  .filter((table) => table);

export const clearMysql = async () => {
  await prisma.$transaction([
    prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`,
    ...tables.map((table) => prisma.$executeRawUnsafe(`TRUNCATE ${table};`)),
    prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`,
  ]);
};

export const clearPostgres = async () => {
  console.log({ tables });
  await prisma.$transaction([
    ...tables.map((table) =>
      prisma.$executeRawUnsafe(`TRUNCATE ${table} CASCADE;`)
    ),
  ]);
};

export const clearDefault = async () =>
  execPromisify("npx prisma migrate reset --force --skip-seed");

const executeClear = {
  mysql: clearMysql,
  postgres: clearPostgres,
};

export const clear = (provider: keyof typeof executeClear = "postgres") => {
  const execute = executeClear[provider] || clearDefault;
  return execute();
};
