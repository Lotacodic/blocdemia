"use client";

import React from "react";
import SignupButton from "../SignupButton";
import * as Tooltip from "@radix-ui/react-tooltip";
import { IoMenuSharp } from "react-icons/io5";

const Header = ({
  setOpenSidebar,
}: {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed w-full sm:w-[calc(100vw-205px)] h-[70px] bg-[#222] border-b border-[#545454] flex items-center justify-between p-5">
      <IoMenuSharp
        color="#B977FF"
        className="sm:hidden cursor-pointer"
        fontSize={20}
        onClick={() => setOpenSidebar(true)}
      />
      <h2 className="hidden sm:block text-[#B977FF] text-lg font-semibold">
        Dashboard
      </h2>

      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="flex items-center mr-5">
              <SignupButton className="bg-purple-100" />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-[#222] px-[15px] py-2.5 text-[12px] text-vio shadow-lg will-change-[transform,opacity] animate-slideUpAndFade"
              sideOffset={5}
            >
              Connect to a VPN to connect wallet
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default Header;
