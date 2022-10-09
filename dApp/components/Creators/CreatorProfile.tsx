import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../Layout";
import { ICreator } from "./types";
import { SocialIcon } from "react-social-icons";

type Props = { data: ICreator };

const CreatorProfilePage = ({ data }: Props) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
        <Head>
          <title>0xBazaar about</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="text-2xl text-black">{data.name}</div>
          {/* <div className="overflow-auto text-ellipsis">{data.description}</div> */}
          <div className="text-ellipsis">
            {data.socials?.map((socialItem) => (
              <SocialIcon url={socialItem} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatorProfilePage;
