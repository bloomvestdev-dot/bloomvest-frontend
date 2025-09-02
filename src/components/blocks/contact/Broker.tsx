import React from "react";
import Steps from "./Steps";
import { useLanguage } from "@/context/LanguageContext";

type Props = {};

export default function Broker({}: Props) {
  const { t } = useLanguage();
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 md:gap-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center px-4">
          {t("start-easy-steps")}
        </h1>
        <Steps />
      </div>
    </div>
  );
}
