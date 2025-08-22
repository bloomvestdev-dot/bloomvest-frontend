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
    <div className="mx-auto w-full px-10 py-12 bg-[#FAFAFA] space-y-10 flex flex-col justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-black">{title}</h1>
        <p className="text-[#878C91] text-xl">{description}</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
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
          className="w-50 mx-auto text-md cursor-pointer p-6 bg-black rounded-full"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
