"use client";

import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

import BackgroundLayout from "@/layout/BackgroundLayout";
import logo from "@/assets/images/logo.png";

import Button from "@/components/common/Button";
import SignupButton from "@/components/common/SignupButton";
import LoginButton from "@/components/common/LoginButton";
import WalletWrapper from "@/components/onchain/WalletWrapper";

const Auth = () => {
  const { address } = useAccount();

  return (
    <BackgroundLayout>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full max-h-[1024px] gap-[99px]">
        <HeroSection />
        <AuthForm address={address} />
      </div>
    </BackgroundLayout>
  );
};

const HeroSection = () => (
  <div className="hidden sm:block w-full max-w-[480px] h-[513px]">
    <h1 className="font-semibold text-[52px] leading-[62px]">
      Learn the <br /> Basics of Web3...
    </h1>
  </div>
);

const AuthForm = ({ address }: { address?: string }) => (
  <div className="w-full max-w-[626px] h-[60vh] md:h-[80vh] p-5 sm:bg-[#32323233]/20 rounded-[32px]">
    <Image
      src={logo}
      alt="Blocdemia logo"
      width={200}
      height={50}
      className="w-[132px] h-[50px] mb-2 sm:mb-4 mx-auto object-contain"
    />

    <h3 className="font-medium text-2xl leading-8 text-center mb-10">
      Create account
    </h3>

    <div className="space-y-3">
      <Button text="Create account" disabled />
      <SignupButton />
      {!address && <LoginButton />}
      <WalletWrapper
        className="w-full rounded-3xl h-[50px] bg-[#323232] font-medium text-base max-w-full my-[10px]"
        text="continue with coinbase"
      />
      <p className="text-sm font-normal text-center">
        Connect to a VPN to use your Coinbase wallet
      </p>
    </div>
  </div>
);

export default Auth;
