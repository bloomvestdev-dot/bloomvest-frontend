"use client";

import { LatestCourseProps } from "@/types";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

export default function LatestCourse({
  title,
  description,
  courses,
}: LatestCourseProps & { courses: any[] }) {
  const [visibleCourses, setVisibleCourses] = useState(6);

  const coursesLength = courses.length;

  console.log(courses);

  const handleLoadMore = () => {
    setVisibleCourses((prev) => prev + 3);
  };

  return (
    <div className="mx-auto w-full px-10 py-16 flex flex-col justify-center gap-20 bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="max-w-6xl text-center text-[#878C91]">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
      {visibleCourses < coursesLength && (
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
