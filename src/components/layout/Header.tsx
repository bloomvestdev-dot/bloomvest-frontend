"use client";
import React, { useState } from "react";
import type { LinkProps, LogoProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto w-full lg:px-10 lg:py-8 px-5 py-2 flex items-center justify-between top-0 relative z-10">
      <Link href="/">
        <StrapiImage
          src={logo?.image?.url}
          alt={logo?.image.name || "Stock market analysis"}
          width={100}
          height={100}
        />
      </Link>

      {/* Desktop Navigation - Keep exactly as is */}
      <div className="hidden lg:flex items-center gap-10">
        {navigation?.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={index}>
              <p className={cn({ "font-bold": isActive })}>{item.text}</p>
            </Link>
          );
        })}
      </div>

      {/* Desktop Language Selector - Keep exactly as is */}
      <div className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 lg:border lg:border-black p-2 rounded-full cursor-pointer">
              <CiGlobe />
              <p className="lg:text-sm hidden lg:inline-block">
                {language === "en" ? "English" : "فارسی"}
              </p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem onClick={toggleLanguage}>
              {language === "en" ? "Farsi" : "English"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Controls - Language Selector + Menu Button */}
      <div className="lg:hidden flex items-center gap-4">
        {/* Mobile Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center  lg:border lg:border-black p-2 rounded-full cursor-pointer">
              <CiGlobe size={20} />
              <p className="lg:text-sm hidden lg:inline-block">
                {language === "en" ? "English" : "فارسی"}
              </p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem onClick={toggleLanguage}>
              {language === "en" ? "Farsi" : "English"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
          <div className="px-10 py-6 space-y-4">
            {/* Mobile Navigation */}
            <div className="space-y-4">
              {navigation?.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <p className={cn("text-lg", { "font-bold": isActive })}>
                      {item.text}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
