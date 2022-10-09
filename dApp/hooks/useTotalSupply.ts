import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { fetchTotalSupply } from "../utils/calls";

interface ReturnProps {
  totalSupply: number;
  loading: boolean;
}

export const useTotalSupply = (address: string): ReturnProps => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTotalSupply = async () => {
      setLoading(true);
      const response = await fetchTotalSupply(address);
      response &&
        setTotalSupply(parseInt(ethers.utils.formatUnits(response, 0)));
      setLoading(false);
    };
    !loading && getTotalSupply();
  }, [address]);

  return { totalSupply, loading };
};
