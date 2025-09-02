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
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <motion.h1 
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center leading-tight px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full mx-auto">
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6">
              {courses.map((course, index) => (
                <FeaturedCard
                  course={course}
                  background={background}
                  key={index}
                />
              ))}
            </CarouselContent>
            {/* Navigation buttons - hidden on small screens for better mobile UX */}
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-6 lg:-left-8" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-6 lg:-right-8" />
          </Carousel>
        </motion.div>
      </div>
    </motion.div>
  );
}
