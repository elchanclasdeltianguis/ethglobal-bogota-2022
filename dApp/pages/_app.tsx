import "@rainbow-me/rainbowkit/styles.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { JsonRpcProvider, getDefaultProvider } from "@ethersproject/providers";
import { ethers, providers, Contract } from "ethers";
import { NftProvider, useNft } from "use-nft";

import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { env } from "process";

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.LIVEPEER }),
});
``;
const livepeerTheme: ThemeConfig = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
};

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.polygon, chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "0xBazaar",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const rpc = "https://rpc.ankr.com/polygon_mumbai";
const ethersConfig = {
  ethers: { Contract },
  provider: getDefaultProvider(rpc),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <LivepeerConfig client={client} theme={livepeerTheme}>
          <NftProvider fetcher={["ethers", ethersConfig]}>
            <Component {...pageProps} />
          </NftProvider>
        </LivepeerConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
