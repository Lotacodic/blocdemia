"use client";

import React from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useName } from "@coinbase/onchainkit/identity";
import { base } from "viem/chains";

import DashboardLayout from "@/layout/DashboardLayout";
import Button from "@/components/common/Button";
import CourseCard from "@/components/common/CourseCard";
import courses from "@/constants/courses";

const Dashboard = () => {
  const { address } = useAccount();
  const { data: name } = useName({
    address: address ?? ("" as `0x${string}`),
    chain: base,
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 w-full">
        <GreetingSection name={name || "there"} />
        <div className="grid grid-cols-2 gap-5 w-full">
          <PlaceholderCard />
          <PlaceholderCard />
        </div>
        <FooterSection />
      </div>
    </DashboardLayout>
  );
};

const GreetingSection = ({ name }: { name: string }) => (
  <section className="bg-[#404040] rounded-[26px] w-full mb-6 p-6">
    <div className="flex flex-wrap items-center justify-between w-full mb-7">
      <div>
        <h2 className="text-2xl leading-8 font-semibold">Hello, {name}</h2>
        <p className="text-sm text-[#d2d2d2]">
          Let’s start your journey to mastering Web3.
        </p>
      </div>

      <Link href="/courses" passHref>
        <Button text="View all courses" withArrow size="fit" />
      </Link>
    </div>

    <RecommendedCourses />
  </section>
);

const RecommendedCourses = () => (
  <>
    <h3 className="font-semibold text-lg mb-5">Recommended courses</h3>
    <div className="flex flex-wrap gap-6 w-full">
      {courses.slice(0, 3).map((course) => (
        <CourseCard
          key={course.title}
          title={course.title}
          content={course.description}
          time={course.duration}
          courseImage={course.courseImage}
        />
      ))}
    </div>
  </>
);

const PlaceholderCard = () => (
  <div className="bg-[#404040] rounded-[30px] w-full h-[200px]" />
);

const FooterSection = () => (
  <div className="bg-[#404040] rounded-[30px] w-full p-6">
    <h3 className="font-semibold text-lg mb-5">Recommended courses</h3>
  </div>
);

export default Dashboard;
