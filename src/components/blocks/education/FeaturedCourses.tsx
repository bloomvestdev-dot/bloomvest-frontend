import { FeaturedCourseProps } from "@/types";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedCourses({
  title,
  background,
  courses,
}: FeaturedCourseProps & {
  courses: any[];
}) {
  return (
    <div className="mx-auto w-full px-16 py-16">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <h1 className="font-bold text-6xl mb-10">{title}</h1>

        <Carousel className="w-full  mx-auto">
          <CarouselContent className="-ml-4">
            {courses.map((course, index) => (
              <FeaturedCard
                course={course}
                background={background}
                key={index}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
