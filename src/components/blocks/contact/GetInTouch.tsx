import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type Props = {};

export default function GetInTouch({}: Props) {
  const { t } = useLanguage();
  return (
    <div className="bg-[#FAFAFA] px-4 sm:px-6 md:px-8 lg:px-10 space-y-6 sm:space-y-8 md:space-y-10">
      {/* Heading */}
      <div className="flex flex-col items-center p-6 sm:p-8 md:p-10 gap-3 sm:gap-4 md:gap-5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t("get-in-touch")}</h1>
        <p className="text-[#878C91] max-w-xl text-sm sm:text-base">
          {t("get-in-touch-description")}
        </p>
      </div>

      {/* Form Card */}
      <div className="relative bg-black p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-gray-300 overflow-hidden">
        {/* Background Image */}
        <Image
          fill
          src="/bg.png"
          alt="background"
          className="object-cover opacity-20"
        />

        {/* Overlay Form */}
        <div className="relative z-10 text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            {t("send-message")}
          </h1>
          <p className="text-[#878C91] text-xs sm:text-sm max-w-md mx-auto">
            {t("send-message-description")}
          </p>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 text-left">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="flex-1">
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  {t("name")}
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  {t("phone")}
                </label>
                <input
                  name="phone"
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">{t("email")}</label>
              <input
                name="email"
                type="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                {t("subject")}
              </label>
              <input
                name="subject"
                type="text"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                {t("message")}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
