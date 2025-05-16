"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/layout.module.css";
import { twMerge } from "tailwind-merge";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log(openSidebar);

  return (
    <div className={styles["layout_container"]}>
      {/* Sidebar receives open state to control visibility */}
      <Sidebar open={openSidebar} />

      {/* Main content wrapper */}
      <div
        className={twMerge(
          "w-full h-full relative",
          styles["dashboard_content"]
        )}
        onClick={() => {
          // Close sidebar when clicking outside if it is open
          if (openSidebar) {
            setOpenSidebar(false);
          }
        }}
      >
        {/* Header can toggle sidebar open state */}
        <Header setOpenSidebar={setOpenSidebar} />
        
        {/* Content container with padding to avoid overlapping header */}
        <div
          className="w-full h-full bg-[#222] px-[24px]"
          style={{
            paddingTop: 94,
            paddingBottom: 24,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;=