import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

import { ICreator } from "./types";

type Props = { data: ICreator };

export default function Creator({ data }: Props) {
  return (
    /* CONTAINER */
    <div
      className="h-72 p-8 w-[444px] flex items-center rounded-[40px]  bg-gray-200 
          text-center outline-none shadow-[#333] shadow-[0px_4px_0px_0px] text-[rgba(130,130,130,1)] gap-x-8 cursor-pointer"
    >
      {/* IMAGE */}
      <Image
        className="rounded-full "
        src={`/images/creators/${data.image}`}
        // layout="fill"
        objectFit="cover"
        priority
        width={180}
        height={180}
      />
      {/* INFO */}
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="text-2xl text-black uppercase">{data.name}</div>
        {/* <div className="overflow-auto text-ellipsis">{data.description}</div> */}
        <div className="grid grid-cols-2 gap-1">
          {data.socials?.map((socialItem) => (
            <SocialIcon url={socialItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
