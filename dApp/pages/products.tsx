import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { NftProvider, useNft } from "use-nft";
import { useTotalSupply } from "../hooks/useTotalSupply";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const collectionAddress = "0x9bd44e0aF02F780b42Ba40bd5c8d5d5807E16e09";

const ProductsPage: NextPage = () => {
  const [address, setAddress] = useState(collectionAddress);
  const { totalSupply, loading: loadingTotalSuplpy } = useTotalSupply(address);
  const [id, setId] = useState(0);
  const { loading, error, nft } = useNft(address, id.toString());

  const handleClickLeft = () => {
    const newId = id > 0 ? id - 1 : totalSupply - 1;
    setId(newId);
  };

  const handleClickRight = () => {
    const newId = id < totalSupply - 1 ? id + 1 : 0;
    setId(newId);
  };

  // console.log(nft);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
        <Head>
          <title>Products Gallery</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="font-display text-6xl mb-24">Products Gallery</div>
        {/* <CollectionSearch searchText={(text: string) => setAddress(text)} /> */}
        {loading ? (
          <p>loading</p>
        ) : (
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <ChevronLeftIcon
                className="w-12 cursor-pointer"
                onClick={handleClickLeft}
              />
              <img
                className=" shadow-[#333] shadow-[0px_4px_0px_0px] rounded-[40px] max-h-48"
                src={nft?.image}
                height={192}
                alt={nft?.description}
              />
              <ChevronRightIcon
                className="w-12 cursor-pointer"
                onClick={handleClickRight}
              />
            </div>
            <h1 className="">Title: {nft?.name}</h1>
            <p>Description: {nft?.description}</p>
            <p>Owner: {nft?.owner}</p>
          </div>
        )}
        <p>Total supply: {loadingTotalSuplpy ? "loading" : totalSupply}</p>
        <p>id: {id}</p>
      </div>
    </Layout>
  );
};

export default ProductsPage;
