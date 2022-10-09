import Image from "next/image";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      className="flex text-center items-center justify-center py-4 border-t \
      rounded-t-full gap-8 bg-[#eee] h-16 "
    >
      Powered by
      <Image
        src="/images/logos/livepeer.svg"
        width={100}
        height={30}
        objectFit="contain"
      />
      <Image
        src="/images/logos/polygon.svg"
        width={120}
        height={30}
        objectFit="contain"
      />
      <Image
        src="/images/logos/ipfs.png"
        width={80}
        height={30}
        objectFit="contain"
      />
      <Image
        src="/images/logos/ens.png"
        width={60}
        height={30}
        objectFit="contain"
      />
    </footer>
  );
}
