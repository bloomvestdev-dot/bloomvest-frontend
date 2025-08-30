import { getStrapiMedia } from "@/components/StrapiImage";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";

import React from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

type Props = {
  background: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
  course: any;
};

export default function FeaturedCard({ course, background }: Props) {
  const imageUrl = getStrapiMedia(background.url);

  return (
    <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card
          className="overflow-hidden bg-black bg-cover bg-center rounded-4xl"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <CardContent className="relative flex aspect-square items-center justify-center p-6">
            <div className="absolute inset-0" />
            <div className="relative z-20 w-full">
              <div className="flex justify-between items-center">
                <div className="">
                  <span className="text-black p-3 text-sm font-medium rounded-full bg-white">
                    {course.courseCard.courseType}
                  </span>
                </div>
                <div className="">
                  <span className="text-white bg-[#5CF297] p-2 rounded-full">
                    {course.courseCard.courseValue}
                  </span>
                </div>
              </div>
              <div className="mt-10 space-y-10">
                <h1 className="text-white text-3xl font-semibold">
                  {course.courseCard.heading}
                </h1>
                <p className="text-[#FFFFFFA1]">
                  {course.courseCard.description}
                </p>
              </div>
              <div className="space-y-3 mt-8">
                <span className="flex items-center gap-2 text-white">
                  <CiClock2 />
                  <p className="text-[#878C91] text-sm font-medium">
                    {course.courseCard.courseDuration}
                  </p>
                </span>
                <span className="">
                  <span className="flex items-center gap-2 text-white">
                    <MdOutlineMenuBook />
                    <p className="text-[#878C91] text-sm font-medium">
                      {course.courseCard.difficulty}
                    </p>
                  </span>
                </span>
              </div>
              <Button className="mx-auto w-full p-8 rounded-full bg-white text-black font-bold text-2xl hover:text-white mt-10">
                {course.courseCard.cta.text}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
