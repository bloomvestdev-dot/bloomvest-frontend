import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";
import { PiNetwork } from "react-icons/pi";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type Props = {};

export default function Steps({}: Props) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="bg-[#8376FF] rounded-full p-4 sm:p-6 md:p-8 text-white">
          <LuNotebookPen size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]" />
        </div>
        <p className="max-w-[8rem] text-center text-xs sm:text-sm">
          {t("step-1-register")}
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src={"/line-1.svg"}
        alt="name"
        className="hidden sm:block -mt-10 rotate-90 sm:rotate-0"
      />
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="bg-[#8376FF] rounded-full p-4 sm:p-6 md:p-8 text-white">
          <FaRegHandshake size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]" />
        </div>
        <p className="max-w-[8rem] text-center text-xs sm:text-sm">
          {t("step-2-form")}
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src={"/line-2.svg"}
        alt="name"
        className="hidden sm:block -mt-10 rotate-90 sm:rotate-0"
      />
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="bg-[#8376FF] rounded-full p-4 sm:p-6 md:p-8 text-white">
          <PiNetwork size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]" />
        </div>
        <p className="max-w-[8rem] text-center text-xs sm:text-sm">
          {t("step-3-connect")}
        </p>
      </div>
    </div>
  );
}
