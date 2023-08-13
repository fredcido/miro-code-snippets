import { SourceType, type Prisma } from "@prisma/client";
import { prisma } from "~/server/db";

const sourceData = {
  boardId: "d4e79e85-547f-44bf-ad6c-9645008b1c2e",
  teamId: "cb9db51d-bf69-49ab-ad5d-6107b966c23c",
  userId: "cabfe8a9-efde-49b5-95ea-258729d4d448",
};

const createSnippets = async () => {
  const result = await prisma.snippet.create({
    data: {
      code: "miro.board.notifications.showInfo('Hello')",
      name: "Snap to Grid",
      createdBy: {
        connectOrCreate: {
          create: sourceData,
          where: {
            userId_boardId_teamId: sourceData,
          },
        },
      },
      ShareConfig: {
        create: [
          {
            sourceType: "USER",
            identifier: sourceData.userId,
            createdBy: {
              connectOrCreate: {
                create: sourceData,
                where: {
                  userId_boardId_teamId: sourceData,
                },
              },
            },
          },
          {
            sourceType: "BOARD",
            identifier: sourceData.boardId,
            createdBy: {
              connectOrCreate: {
                create: sourceData,
                where: {
                  userId_boardId_teamId: sourceData,
                },
              },
            },
          },
          {
            sourceType: "TEAM",
            identifier: sourceData.teamId,
            createdBy: {
              connectOrCreate: {
                create: sourceData,
                where: {
                  userId_boardId_teamId: sourceData,
                },
              },
            },
          },
        ],
      },
      Predicate: {
        create: [
          {
            predicate: {
              $or: [
                { type: "shape" },
                { type: "image" },
                { type: "text" },
                { type: "sticky_note" },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(result);
};

// const shareWithBoard = async () => {
//   const shareWith = {
//     sourceType: SourceType.BOARD,
//     identifier: sourceData.boardId,
//     createdBy: {
//       connectOrCreate: {
//         create: sourceData,
//         where: {
//           userId_boardId_teamId: sourceData,
//         },
//       },
//     },
//     snippet: {
//       connect: {
//         id: "11232132",
//       },
//     },
//   };

//   const source = await prisma.shareConfig.upsert({
//     create: shareWith,
//     update: {},
//     where: {
//       AND: [
//         {
//            sourceType: SourceType.BOARD,
//         },
//         {
//           identifier: sourceData.boardId,
//         }
//       ]\
//     },
//   });

//   console.log(source);
// };

const fetchAdoptedSnippets = async () => {
  const result = await prisma.snippet.findMany({
    where: {
      ShareConfig: {
        some: {
          sourceType: "USER",
          identifier: sourceData.userId,
        },
      },
    },
  });

  console.log({ result });
};

const fetchShared = async () => {
  return prisma.snippet.findMany({
    include: {
      ShareConfig: {
        select: {
          id: true,
          sourceType: true,
        },
      },
    },
    where: {
      OR: [
        {
          // User has adopted
          ShareConfig: {
            some: {
              sourceType: "USER",
              identifier: sourceData.userId,
            },
          },
        },
        {
          // Shared with my board
          ShareConfig: {
            some: {
              sourceType: "BOARD",
              identifier: sourceData.boardId,
            },
          },
        },
        {
          // Shared with my team
          ShareConfig: {
            some: {
              sourceType: "TEAM",
              identifier: sourceData.teamId,
            },
          },
        },
      ],
    },
  });
};

const fetchSharedWith = async (
  shareWith: Prisma.ShareConfigWhereInput[] = []
) => {
  return prisma.snippet.findMany({
    include: {
      ShareConfig: {
        select: {
          id: true,
          sourceType: true,
        },
      },
    },
    where: {
      OR: shareWith.map((share) => ({
        ShareConfig: { some: share },
      })),
    },
  });
};

async function main() {
  //   await create();
  //   await fetchAdoptedSnippets();
  //   console.log(await fetchShared());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
