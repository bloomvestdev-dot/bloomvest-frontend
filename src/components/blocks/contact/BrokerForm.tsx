import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  register: {
    title: string;
    point: {
      title: string;
    }[];
  };
};

export default function BrokerForm({ register }: Props) {
  const [experienceLevel, setExperienceLevel] = React.useState(
    "Trading Experience "
  );
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div className="bg-[#FFFFFF] rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-16 md:mb-20">
          <h1 className="text-xl sm:text-2xl font-semibold text-center">Broker Registration</h1>
          <p className="text-[#878C91] text-center text-sm sm:text-base">
            Register with our partnered broker to access all our services.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 w-full">
            <label className="flex flex-col items-start flex-1">
              Name
              <input
                type="text"
                className="border border-gray-200 p-2 rounded-lg w-full"
              />
            </label>
            <label className="flex flex-col items-start flex-1">
              Phone
              <input
                type="text"
                className="border border-gray-200 p-2 rounded-lg w-full"
              />
            </label>
          </div>
          <label className="flex flex-col items-start w-full">
            Email
            <input
              type="text"
              className="border border-gray-200 p-2 rounded-lg w-full"
            />
          </label>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between p-4 sm:p-6 md:p-7">
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
        </form>
      </div>
      <div className="bg-white rounded-2xl flex flex-col gap-6 sm:gap-8 md:gap-10 h-auto sm:h-[400px] md:h-[500px] items-center justify-center border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">{register.title}</h1>
        <div className="flex flex-col items-start mt-4 space-y-3 sm:space-y-4 md:space-y-5">
          {register.point.map((point, index) => (
            <div className="flex items-start gap-3" key={index}>
              <FiCheckCircle className="text-[#8376FF] mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-[#1E1E1EBF] max-w-lg">{point.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
