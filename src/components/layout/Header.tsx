import React from "react";
import type { LinkProps, LogoProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
  };
}

export default function Header({ data }: HeaderProps) {
  const { logo, navigation } = data;
  return (
    <div className="mx-auto w-full px-10 py-8 flex items-center justify-between">
      <Link href="/">
        <StrapiImage
          src={logo?.image?.url}
          alt={logo?.image.name || "Stock market analysis"}
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-10">
        {navigation?.map((item, index) => (
          <Link href={item.href} key={index}>
            <p className="">{item.text}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 border-1 border-black p-2 rounded-full cursor-pointer">
        <CiGlobe />
        <p className="text-sm">English</p>
      </div>
    </div>
  );
}
