import type { NextPage } from "next";
import Head from "next/head";
import { Player } from "@livepeer/react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";

import { useEnsAvatar, useEnsName, useEnsAddress, useAccount } from "wagmi";

const PosterImage = () => {
  return (
    <Image
      src={"/colors.png"}
      layout="fill"
      objectFit="cover"
      priority
      // placeholder="blur"
    />
  );
};

const justCastIt = "https://justcast.it/socialist-gecko-sula";

const playbackId =
  "bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe";

const vid = "1901ety4nvzgd6e4";

const playerTheme = {
  background: { color: "#000000" },
  borderStyles: {
    containerBorderStyle: "hidden",
  },
  colors: {
    accent: "#ff0000",
  },
  space: {
    controlsBottomMarginX: "10px",
    controlsBottomMarginY: "5px",
    controlsTopMarginX: "15px",
    controlsTopMarginY: "10px",
  },
  radii: {
    containerBorderRadius: "40px",
  },
};

const Home: NextPage = () => {
  const { address } = useAccount();
  const { data, isError, isLoading } = useEnsAvatar({
    addressOrName: address,
  });
  const { data: nameData, isLoading: isLoadingName } = useEnsName({
    address: address,
    chainId: 1,
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden ">
        <Head>
          <title>Crypto Bazaar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-6xl my-8 font-display text-white bg-red-500 px-8 rounded-full py-2 shadow-[#333] shadow-[0px_4px_0px_0px]">
          <h1>Crypto Bazaar</h1>
          <p className="text-sm pt-2 text-center font-sans italic">
            Bazaar Navideño Web3 CDMX 2022
          </p>
        </div>
        {/* IF ENS */}

        {!isLoadingName && !isLoading && nameData && (
          <div className="text-2xl text-white italic">Dear {nameData},</div>
        )}
        {/* IF ENS END*/}

        <p className="font-sans text-2xl italic mb-8 text-white">
          please join us live December 2nd and 3rd 2022!
        </p>
        <div
          className={`w-[666px] flex-1 flex-grow items-center gap-2 rounded-[40px] border-4 border-solid border-black bg-black z-0
          text-center outline-none  shadow-[#333333] shadow-[0px_4px_0px_0px] text-[rgba(130,130,130,1)]`}
        >
          <Player
            title="Crypto Bazaar Live Stream"
            playbackId={vid}
            loop
            autoPlay
            showTitle={true}
            muted
            poster={<PosterImage />}
            theme={playerTheme}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
