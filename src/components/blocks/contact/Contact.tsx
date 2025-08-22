"use client";
import { ContactHeroProps } from "@/types";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
type Props = {};

export default function Contact({ title, description }: ContactHeroProps) {
  const [experienceLevel, setExperienceLevel] = React.useState(
    "Intermediate (1-3 years)"
  );
  return (
    <div className="mx-auto w-full bg-white space-y-10 flex flex-col justify-center">
      <div className="text-center space-y-4 py-20">
        <h1 className="text-6xl font-bold text-black">{title}</h1>
        <p className="text-[#878C91] text-xl">{description}</p>
      </div>

      <div className="bg-[#FAFAFA] px-28 py-20 space-y-10">
        <div className="bg-white p-16 rounded-4xl border border-gray-300 ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-black">
              Send us a Message
            </h1>
            <p className="text-[#878C91] text-sm">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="w-full ">
              <form className="space-y-6 mt-8">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-left text-black font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-left text-black font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-left text-black font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-left text-black font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-left text-black font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white p-16 rounded-4xl border border-gray-300 ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold text-black">
              Send us a Message
            </h1>
            <p className="text-[#878C91] text-sm">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="w-full ">
              <form className="space-y-6 mt-8">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-left text-black font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-left text-black font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-left text-black font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-left text-black font-medium mb-2">
                    Trading Experience
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between p-7"
                      >
                        {experienceLevel}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                      <DropdownMenuRadioGroup
                        value={experienceLevel}
                        onValueChange={setExperienceLevel}
                      >
                        <DropdownMenuRadioItem value="Beginner (0-1 years)">
                          Beginner (0-1 years)
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Intermediate (1-3 years)">
                          Intermediate (1-3 years)
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Advanced (3+ years)">
                          Advanced (3+ years)
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
