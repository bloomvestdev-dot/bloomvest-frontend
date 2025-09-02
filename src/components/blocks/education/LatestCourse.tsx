"use client";

import { LatestCourseProps } from "@/types";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LatestCourse({
  title,
  description,
  courses,
}: LatestCourseProps & { courses: any[] }) {
  const [visibleCourses, setVisibleCourses] = useState(6);
  const { t } = useLanguage();

  const coursesLength = courses.length;

  console.log(courses);

  const handleLoadMore = () => {
    setVisibleCourses((prev) => prev + 3);
  };

  return (
    <motion.div 
      className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-14 lg:py-16 flex flex-col justify-center gap-12 sm:gap-16 md:gap-18 lg:gap-20 bg-[#FAFAFA]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center w-full gap-6 sm:gap-7 md:gap-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="max-w-4xl sm:max-w-5xl lg:max-w-6xl text-center text-[#878C91] text-sm sm:text-base md:text-lg leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
      {visibleCourses < coursesLength && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleLoadMore}
            className="w-40 sm:w-44 md:w-48 lg:w-50 mx-auto text-sm sm:text-base md:text-md cursor-pointer p-4 sm:p-5 md:p-6 bg-black rounded-full"
          >
            {t("load-more")}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
