import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Creators from "../components/Creators";

const CreatorsPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
        <Head>
          <title>0xBazaar creators</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Creators />
      </div>
    </Layout>
  );
};

export default CreatorsPage;
