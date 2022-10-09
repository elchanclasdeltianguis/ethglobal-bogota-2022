import React from "react";
import ProductCollection from "./ProductCollection";

type Props = {};

const collectionAddresses = [
  "0x2115736AA87041481b62F1c51CB2708129BBAF70",
  "0x9bd44e0aF02F780b42Ba40bd5c8d5d5807E16e09",
];

export default function ProductsGallery({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {collectionAddresses.map((item) => (
        <ProductCollection collectionAddress={item} />
      ))}
    </div>
  );
}
