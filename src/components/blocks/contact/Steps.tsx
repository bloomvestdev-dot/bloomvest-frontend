import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";
import { PiNetwork } from "react-icons/pi";
import Image from "next/image";

type Props = {};

export default function Steps({}: Props) {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-[#8376FF]  rounded-full p-8 text-white">
          <LuNotebookPen size={30} />
        </div>
        <p className="max-w-[8rem] text-center text-xs">
          Register On our website
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src={"/line-1.svg"}
        alt="name"
        className="-mt-10"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-[#8376FF] rounded-full p-8 text-white">
          <FaRegHandshake size={30} />
        </div>
        <p className="max-w-[8rem] text-center text-xs">
          Complete the Collaboration form
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src={"/line-2.svg"}
        alt="name"
        className="-mt-10"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-[#8376FF] rounded-full p-8 text-white">
          <PiNetwork size={30} />
        </div>
        <p className="max-w-[8rem] text-center text-xs">
          Get Connected for our team to reach you out
        </p>
      </div>
    </div>
  );
}
