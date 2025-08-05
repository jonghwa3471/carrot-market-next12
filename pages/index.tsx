import type { NextPage } from "next";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import Head from "next/head";
import useSWR, { SWRConfig } from "swr";
import { Product } from "@prisma/client";
import Image from "next/image";
import avicii from "../public/Avicii_img.jpeg";
import client from "@libs/server/client";
import products from "./api/products";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");
  return (
    <Layout title="홈" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {data
          ? data?.products?.map((product) => (
              <Item
                id={product.id}
                key={product.id}
                title={product.name}
                price={product.price}
                comments={1}
                hearts={product._count?.favs || 0}
              />
            ))
          : "Loading...."}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
      <Image src={avicii} alt="avicii" placeholder="blur" quality={10} />
    </Layout>
  );
};

const Page: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          "/api/products": {
            ok: true,
            products,
          },
        },
      }}
    >
      <Home />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  // const products = await client.product.findMany({});
  const products = [
    {
      id: 1,
      name: "상품1",
      price: "100",
      description: "상품 예시111",
      image: "xx",
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      user: {
        id: 19,
        phone: "12345",
        email: null,
        name: "Anonymous",
        avatar: null,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
      },
      _count: {
        favs: 7,
      },
    },
    {
      id: 2,
      name: "상품2",
      price: "200",
      description: "상품 예시222",
      image: "xx",
      createdAt: "2025-01-26T08:24:50.545z",
      updatedAt: "2025-01-26T08:24:50.546z",
      user: {
        id: 20,
        phone: "null",
        email: "whdghk3471@naver.com",
        name: "Anonymous",
        avatar: null,
        createdAt: "2022-01-26T08:24:50.545z",
        updatedAt: "2022-01-26T08:24:50.546z",
      },
      _count: {
        favs: 12,
      },
    },
  ];

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Page;
