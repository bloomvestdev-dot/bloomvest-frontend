"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { ArchivedWebinarsProps } from "@/types";
import ArchivedWebinarCard from "./ArchivedWebinarCard";

type Props = {
  webinars: any[];
};

export default function ArchivedWebinar({
  title,
  description,
  webinars,
}: ArchivedWebinarsProps & {
  webinars?: any[];
}) {
  const archivedWebinars = webinars?.filter(
    (webinar) => webinar.webinar?.isArchived === false
  );

  const [visibleWebinar, setVisibleWebinar] = useState(2);

  const webinarsLength = webinars?.length || 0;

  const handleLoadMore = () => {
    setVisibleWebinar((prev) => prev + 3);
  };
  return (
    <div className="mx-auto w-full px-10 py-12 bg-white space-y-10 flex flex-col justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-black">{title}</h1>
        <p className="text-[#878C91] text-xl">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-10">
        {archivedWebinars &&
          archivedWebinars.map((webinar, index) => (
            <ArchivedWebinarCard webinar={webinar} key={index} />
          ))}
      </div>

      {visibleWebinar < webinarsLength && (
        <Button
          onClick={handleLoadMore}
          className="w-50 mx-auto text-md cursor-pointer p-6 bg-black rounded-full"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
