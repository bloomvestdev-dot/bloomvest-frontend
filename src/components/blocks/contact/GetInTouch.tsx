import React from "react";
import Image from "next/image";

type Props = {};

export default function GetInTouch({}: Props) {
  return (
    <div className="bg-[#FAFAFA] px-10 space-y-10">
      {/* Heading */}
      <div className="flex flex-col items-center p-10 gap-5 text-center">
        <h1 className="text-4xl font-semibold">Get in Touch</h1>
        <p className="text-[#878C91] max-w-xl">
          Have questions about our services or ready to start your trading
          journey? We're here to help.
        </p>
      </div>

      {/* Form Card */}
      <div className="relative bg-black p-16 rounded-3xl border border-gray-300 overflow-hidden">
        {/* Background Image */}
        <Image
          fill
          src="/bg.png"
          alt="background"
          className="object-cover opacity-20"
        />

        {/* Overlay Form */}
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            Send us a Message
          </h1>
          <p className="text-[#878C91] text-sm max-w-md mx-auto">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          {/* Form */}
          <form className="space-y-6 mt-8 text-left">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white font-medium mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
