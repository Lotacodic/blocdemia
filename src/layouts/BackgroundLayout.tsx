import React from "react";

const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-app-bg bg-cover bg-black-90 flex items-center justify-center relative">
      {/* Overlay div with semi-transparent black background */}
      <div className="bg-black-90 w-full h-full absolute top-0 left-0 z-[-2px]"></div>
      
      {/* Content container above the overlay */}
      <div className="z-10 h-full w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;=