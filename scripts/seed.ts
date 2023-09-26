import { type Prisma } from "@prisma/client";
import { prisma } from "../src/server/db";

const sourceData = {
  boardId: "SEED-d4e79e85-547f-44bf-ad6c-9645008b1c2e",
  teamId: "SEED-cb9db51d-bf69-49ab-ad5d-6107b966c23c",
  userId: "SEED-cabfe8a9-efde-49b5-95ea-258729d4d448",
};

const snapToGrid = `miro.board.getSelection().then(async (frames) => {
    console.log('FRAMES', { frames });
    frames.forEach(async (frame) => {
        const children = await frame.getChildren();

        console.log('CHILDREN', { frame, children });

        const cols = 3;
        const padding = 40;

        const colWidth = (frame.width - padding * 2) / (cols - 1);

        let prevHeight = padding;
        let rowHeight = 0;
        let currentRow = 0;

        children.map((item, i) => {
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);

            if (rowIndex > currentRow) {
                prevHeight += rowHeight;
                rowHeight = 0;
                currentRow = rowIndex;
            }

            if (colIndex === 0) {
                item.x = item.width / 2 + padding;
            } else if (colIndex === (cols - 1)) {
                item.x = frame.width - item.width / 2 - padding;
            } else {
                item.x = colWidth * colIndex;
            }

            //item.x = (item.width / 2) + (colWidth * colIndex);
            item.y = (item.height / 2) + prevHeight;

            rowHeight = Math.max(rowHeight, item.height);

            item.sync();
        });
    });
});`;

const data: Prisma.SnippetCreateInput[] = [
  {
    code: snapToGrid,
    name: "Snap to Grid",
    icon: "grid-six",
    status: "PUBLISHED",
    visibility: "PUBLIC",
    createdBy: {
      connectOrCreate: {
        create: sourceData,
        where: {
          userId_boardId_teamId: sourceData,
        },
      },
    },
    Predicate: {
      create: [
        {
          predicate: {
            $or: [{ type: "frame" }],
          },
        },
      ],
    },
  },
];

const create = async () => {
  const rows = await prisma.$transaction(
    data.map((data) => prisma.snippet.create({ data }))
  );

  console.log({ rows });
};

async function main() {
  await create();
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
