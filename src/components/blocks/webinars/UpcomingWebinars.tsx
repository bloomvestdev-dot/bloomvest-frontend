"use client";
import { UpcomingWebinarsProps } from "@/types";
import React, { useState } from "react";
import WebinarCard from "./WebinarCard";
import { Button } from "@/components/ui/button";

export default function UpcomingWebinars({
  title,
  description,
  webinars,
}: UpcomingWebinarsProps & {
  webinars?: any[];
}) {
  const upcomingWebinars = webinars?.filter(
    (webinar) => webinar.webinar?.isArchived === false
  );

  const [visibleWebinar, setVisibleWebinar] = useState(6);

  const webinarsLength = webinars?.length || 0;

  const handleLoadMore = () => {
    setVisibleWebinar((prev) => prev + 3);
  };
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-11 lg:py-12 bg-[#FAFAFA] space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 flex flex-col justify-center">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">{title}</h1>
        <p className="text-[#878C91] text-base sm:text-lg md:text-xl leading-relaxed px-2">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-9 lg:mt-10">
        {upcomingWebinars &&
          upcomingWebinars
            .slice(0, visibleWebinar)
            .map((webinar, index) => (
              <WebinarCard webinar={webinar} key={index} />
            ))}
      </div>

      {visibleWebinar < webinarsLength && (
        <Button
          onClick={handleLoadMore}
          className="w-40 sm:w-44 md:w-48 lg:w-50 mx-auto text-sm sm:text-base md:text-md cursor-pointer p-4 sm:p-5 md:p-6 bg-black rounded-full"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
