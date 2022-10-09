import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

type Props = {};

const navMenuItems = ["shop", "creators", "products"];

export default function Header({}: Props) {
  return (
    <header className="sticky z-50 top-0">
      <nav
        className="flex justify-between text-black w-full items-center px-12 mb-8
        bg-[#eee] h-16 rounded-b-full shadow-[#333] shadow-[0px_4px_0px_0px]"
      >
        <Link href="/">
          <button
            className="text-4xl text-white tracking-wide bg-red-500 px-8 py-1 
          rounded-full font-display outline-none shadow-[#333] shadow-[0px_4px_0px_0px] "
          >
            Crypto Bazaar
          </button>
        </Link>
        {/* nav menu */}
        <div className="flex gap-4 text-xl ">
          {navMenuItems.map((item) => (
            <ul
              key={item}
              className="flex gap-2 items-center px-3 border-2 border-[#333] rounded-full bg-[#fff] shadow-[#333] shadow-[0px_4px_0px_0px] "
            >
              <Link href={"/".concat(item)}>{item}</Link>
            </ul>
          ))}
        </div>
        <div className="">
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}
