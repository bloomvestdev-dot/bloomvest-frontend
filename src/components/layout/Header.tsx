"use client";
import React from "react";
import type { LinkProps, LogoProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext"; // Import the useLanguage hook

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
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage(); // Use the language hook

  return (
    <div className="mx-auto w-full px-10 py-8 flex items-center justify-between top-0 relative z-10">
      <Link href="/">
        <StrapiImage
          src={logo?.image?.url}
          alt={logo?.image.name || "Stock market analysis"}
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-10">
        {navigation?.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={index}>
              <p className={cn({ "font-bold": isActive })}>{item.text}</p>
            </Link>
          );
        })}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 border border-black p-2 rounded-full cursor-pointer">
            <CiGlobe />
            <p className="text-sm">{language === "en" ? "English" : "فارسی"}</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem onClick={toggleLanguage}>
            {language === "en" ? "Farsi" : "English"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
