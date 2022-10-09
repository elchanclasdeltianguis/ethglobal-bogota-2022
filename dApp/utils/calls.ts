import { ethers, Contract, BigNumber } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import ABI from "../config/constants/abis/nft.json";

export const fetchTotalSupply = async (address: string) => {
  try {
    const rpc = "https://rpc.ankr.com/polygon_mumbai";
    const ethersProvider = new JsonRpcProvider(rpc);
    const contract = new Contract(address, ABI, ethersProvider);
    const tx = await contract.totalSupply();
    const response = await tx;
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const fetchTokenByIndex = async (address: string, id: number) => {
  try {
      const rpc = "https://rpc.ankr.com/polygon_mumbai";
      const ethersProvider = new JsonRpcProvider(rpc);
    const contract = new Contract(address, ABI, ethersProvider);
    const tx = await contract.tokenURI(id);
    const response = await tx;
    return response;
  } catch (e: any) {
    return e.message;
  }
};
