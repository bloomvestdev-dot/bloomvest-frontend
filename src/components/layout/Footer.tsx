'use client';
import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

interface FooterProps {
  data: {
    description: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    rightsText: string;
    cta: {
      title: string;
      button: {
        text: string;
        href: string;
      };
    };
    logo: {
      logoText: string;
      image: {
        url: string;
        name: string;
      };
    };
    quickLinks: {
      text: string;
      href: string;
      isExternal: boolean;
    }[];
    services: {
      text: string;
      href: string;
      isExternal: boolean;
    }[];
    contacts: {
      text: string;
      href: string;
      isExternal: boolean;
    }[];
    background: {
      url: string;
      name: string;
    };
  };
}

export default function Footer({ data }: FooterProps) {
  const {
    description,
    facebook,
    twitter,
    instagram,
    linkedin,
    rightsText,
    cta,
    logo,
    quickLinks,
    services,
    contacts,
    background,
  } = data;

  const constactIcons = [
    <MdCall size={15} />,
    <MdOutlineForwardToInbox size={15} />,
    <IoLocationSharp size={15} />,
  ];
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-between bg-[#FAFAFA]">
      <div className="bg-black w-full relative rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-auto">
        <StrapiImage
          src={background.url}
          alt={background.name}
          width={2000}
          height={1300}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-8 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 gap-4 sm:gap-6 lg:gap-0">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-5xl xl:max-w-6xl text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {cta.title}
          </motion.h1>
          <Link href={cta.button.href}>
            <Button className="rounded-full bg-white hover:text-white cursor-pointer text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 space-x-2 sm:space-x-3 md:space-x-4">
              {cta.button.text} <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-0">
        {/* Logo and Description */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full p-3 sm:p-4 md:p-5 flex flex-col items-start gap-4 sm:gap-4 md:gap-5">
          <Link href="/" className="flex items-center gap-2">
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.name}
              width={200}
              height={100}
              className="object-contain mb-2 sm:mb-3 md:mb-4 w-32 sm:w-40 md:w-auto"
            />
          </Link>
          <p className="text-[#9B9B9C] max-w-xs sm:max-w-sm md:max-w-lg text-[10px] sm:text-base md:text-md">
            {description}
          </p>
          <div className="">
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3 md:mt-4">
              {facebook && (
                <Link
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" sm:p-3 rounded-full bg-white"
                >
                  <FaFacebook size={18} className="w-4 sm:w-5 sm:h-5" />
                </Link>
              )}
              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:p-3 rounded-full bg-white"
                >
                  <FaTwitter size={18} className="w-4 sm:w-5 sm:h-5" />
                </Link>
              )}
              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" sm:p-3 rounded-full bg-white"
                >
                  <FaInstagram size={18} className="sm:w-5 sm:h-5 w-4" />
                </Link>
              )}
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:p-3 rounded-full bg-white"
                >
                  <FaLinkedin size={18} className="sm:w-5 sm:h-5 w-4" />
                </Link>
              )}
            </div>
          </div>
          <p className="text-[#9B9B9C] text-sm sm:text-base hidden lg:block">
            {rightsText}
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-6">
            {quickLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black text-[10px] sm:text-base"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Services
          </h3>
          <ul className="space-y-2 sm:space-y-6">
            {services.map((service) => (
              <li key={service.text} className="flex items-center gap-2">
                <Link
                  href={service.href}
                  target={service.isExternal ? "_blank" : "_self"}
                  rel={service.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black text-[10px] sm:text-base"
                >
                  {service.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Contacts
          </h3>
          <ul className="space-y-2 sm:space-y-6">
            {contacts.map((contact, index) => (
              <li key={contact.text} className="inline-flex items-center gap-2">
                <switch>{constactIcons[index]}</switch>
                <Link
                  href={contact.href}
                  target={contact.isExternal ? "_blank" : "_self"}
                  rel={contact.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black text-[10px] sm:text-sm"
                >
                  {contact.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
