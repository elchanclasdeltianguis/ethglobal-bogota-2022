import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Shop: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
        <Head>
          <title>0xBazaar shop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmPaVYdGue8zEXFKqrtVHpvzBvufM1DYzw5n1of3KVPG88/nft-drop.html?contract=0x88bc8C45Ea568Dad7CcEf5d6913Cc885D479a1A1&chainId=80001&theme=dark&primaryColor=yellow"
          width="600px"
          height="600px"
          style={{ borderRadius: "40px" }}
          frameBorder="0"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Shop;
