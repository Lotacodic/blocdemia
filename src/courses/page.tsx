import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import CourseCard from "@/components/common/CourseCard";
import courses from "@/constants/courses";

const Courses = () => {
  return (
    <DashboardLayout>
      <CourseSection
        title="Recommended Courses"
        courses={courses.slice(0, 3)}
      />
      <CourseSection title="All Courses" courses={courses} />
    </DashboardLayout>
  );
};

type Course = {
  title: string;
  description: string;
  duration: string;
  courseImage: string;
};

const CourseSection = ({
  title,
  courses,
}: {
  title: string;
  courses: Course[];
}) => (
  <section className="mb-[28px] last:mb-0 border-b last:border-0 border-[#545454] pb-[32px] last:pb-0">
    <h3 className="text-lg font-semibold mb-5">{title}</h3>
    <div className="flex flex-row flex-wrap gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          title={course.title}
          content={course.description}
          time={course.duration}
          courseImage={course.courseImage}
        />
      ))}
    </div>
  </section>
);

export default Courses;
