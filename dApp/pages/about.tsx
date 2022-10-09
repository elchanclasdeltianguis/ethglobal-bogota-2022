import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
        <Head>
          <title>0xBazaar about</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        about
      </div>
    </Layout>
  );
};

export default About;
