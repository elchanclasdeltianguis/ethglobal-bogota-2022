import { useEffect, useState } from "react";
import { NftProvider, useNft } from "use-nft";
import { useTotalSupply } from "../../hooks/useTotalSupply";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = { collectionAddress: string };

const ProductCollection = ({ collectionAddress }: Props) => {
  const [address, setAddress] = useState(collectionAddress);
  const { totalSupply, loading: loadingTotalSupply } = useTotalSupply(address);
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

  console.log(collectionAddress);
  return (
    <div className="flex flex-col items-center justify-center py-2 scrollbar-hide overflow-hidden">
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-center justify-center">
            {!loadingTotalSupply && (
              <ChevronLeftIcon
                className="w-12 cursor-pointer"
                onClick={handleClickLeft}
              />
            )}
            <img
              className=" shadow-[#333] shadow-[0px_4px_0px_0px] rounded-[40px] max-h-48"
              src={nft?.image}
              height={192}
              alt={nft?.description}
            />
            {!loadingTotalSupply && (
              <ChevronRightIcon
                className="w-12 cursor-pointer"
                onClick={handleClickRight}
              />
            )}
          </div>
          <h1 className="">Title: {nft?.name}</h1>
          <p>Description: {nft?.description}</p>
          <p>Owner: {nft?.owner}</p>
        </div>
      )}
      <p>Total supply: {loadingTotalSupply ? "loading" : totalSupply}</p>
      <p>id: {id}</p>
    </div>
  );
};

export default ProductCollection;
