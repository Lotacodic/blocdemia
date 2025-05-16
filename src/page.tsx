"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/images/logo.png";
import BackgroundLayout from "@/layout/BackgroundLayout";
import SignupButton from "@/components/common/SignupButton";
import WalletWrapper from "@/components/onchain/WalletWrapper";

export default function Home() {
  const { address } = useAccount();
  const router = useRouter();

  // Redirect to dashboard if user is already connected
  useEffect(() => {
    if (address) {
      router.push("/dashboard");
    }
  }, [address, router]);

  return (
    <BackgroundLayout>
      <div className="w-full h-full max-h-[1024px] gap-[99px] flex flex-col sm:flex-row items-center justify-center">
        {/* Main content container */}
        <div className="w-full max-w-[626px] h-[60vh] md:min-h-[351.86px] md:h-auto p-[20px] py-[40px] sm:bg-[#32323233]/20 rounded-[32px]">
          <Image
            src={logo}
            alt="Blocdemia logo"
            width={200}
            height={50}
            className="w-[132px] h-[50px] mb-2 sm:mb-4 mx-auto object-contain"
          />

          <h3 className="font-medium text-2xl leading-8 text-center mb-[20px]">
            Connect your wallet
          </h3>

          <div className="w-full">
            <SignupButton />

            <p className="text-sm font-normal text-center flex items-center justify-center whitespace-nowrap mb-3">
              <WalletWrapper
                className="ockConnectWallet_Container shrink w-fit h-fit bg-transparent font-normal hover:bg-transparent p-0 m-0 text-center mx-auto text-white text-base"
                text="Don't have a wallet? Create one"
              />
            </p>

            <p className="text-[12px] font-normal text-center text-[#d2d2d2]">
              Connect to a VPN to use coinbase wallet
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden w-full max-w-[480px] sm:block">
          <h1 className="font-semibold text-[52px] leading-[62px]">
            Learn the <br /> Basics of Web3...
          </h1>
        </div>
      </div>
    </BackgroundLayout>
  );
}
