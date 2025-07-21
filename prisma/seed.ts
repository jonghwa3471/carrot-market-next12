import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();

interface Stream {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  price: number;
  userId: number;
}

export let streamArr: Stream[] = [];

async function main() {
  [...Array.from(Array(500).keys())].forEach(async (item) => {
    /*     await client.stream.create({
      data: {
        name: String(item),
        description: String(item),
        price: item,
        user: {
          connect: {
            id: 1,
          },
        },
      },
    }); */
    const stream = {
      id: 1,
      createdAt: "2022-01-26T08:24:50.545z",
      updatedAt: "2022-01-26T08:24:50.546z",
      name: String(item),
      description: String(item),
      price: item,
      userId: 1,
    };
    streamArr.push(stream);
    console.log(`${item}/500`);
  });
}

/* main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect()); */

main()
  .catch((e) => console.log(e))
  .finally(() => console.log("client gonna be disconnect"));
