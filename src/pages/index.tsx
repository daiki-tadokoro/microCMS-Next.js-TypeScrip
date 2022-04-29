import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { client } from "../libs/client";

const Home: NextPage = () => {
  return <div className="text-blue-500">Hello!</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList({ endpoint: "blog" });
  console.log(data);
  return {
    props: {},
  };
};

export default Home;
