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
    <div className="mx-auto w-full px-10 py-12 flex flex-col gap-10 justify-between bg-[#FAFAFA]">
      <div className="bg-black w-full relative rounded-2xl overflow-hidden">
        <StrapiImage
          src={background.url}
          alt={background.name}
          width={2000}
          height={1300}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-between p-10">
          <h1 className="text-6xl text-white font-bold max-w-6xl">
            {cta.title}
          </h1>
          <Button className="rounded-full bg-white text-black font-bold text-lg p-7 space-x-4">
            {cta.button.text} <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="col-span-3 w-full p-5 flex flex-col items-start gap-5">
          <Link href="/" className="flex items-center gap-2">
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.name}
              width={200}
              height={100}
              className="object-contain mb-4"
            />
          </Link>
          <p className="text-[#9B9B9C] max-w-lg text-md">{description}</p>
          <div className="">
            <div className="flex gap-4 mt-4">
              {facebook && (
                <Link
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white"
                >
                  <FaFacebook size={20} />
                </Link>
              )}
              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white"
                >
                  <FaTwitter size={20} />
                </Link>
              )}
              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white"
                >
                  <FaInstagram size={20} />
                </Link>
              )}
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white"
                >
                  <FaLinkedin size={20} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-[#9B9B9C]">{rightsText}</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-6">
            {quickLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-6">
            {services.map((service) => (
              <li key={service.text} className="flex items-center gap-2">
                <Link
                  href={service.href}
                  target={service.isExternal ? "_blank" : "_self"}
                  rel={service.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black"
                >
                  {service.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <ul className="space-y-6">
            {contacts.map((contact, index) => (
              <li key={contact.text} className="inline-flex items-center gap-2">
                <switch>{constactIcons[index]}</switch>
                <Link
                  href={contact.href}
                  target={contact.isExternal ? "_blank" : "_self"}
                  rel={contact.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[#9B9B9C] hover:text-black text-sm"
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
