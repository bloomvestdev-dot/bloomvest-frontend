'use client';
import { FeaturedCourseProps } from "@/types";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function FeaturedCourses({
  title,
  background,
  courses,
}: FeaturedCourseProps & {
  courses: any[];
}) {
  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-14 lg:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center w-full gap-6 sm:gap-8 md:gap-9 lg:gap-10">
        <motion.h1 
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-9 lg:mb-10 text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full mx-auto">
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
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
        </motion.div>
      </div>
    </motion.div>
  );
}
