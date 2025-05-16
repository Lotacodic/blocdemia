"use client";
import { twMerge } from "tailwind-merge";
import WalletWrapper from "../onchain/WalletWrapper";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <WalletWrapper
      className={twMerge(
        "w-full h-[50px] my-[10px] mb-4 rounded-3xl bg-[#323232] text-base font-medium",
        className
      )}
      text="Connect wallet"
      withWalletAggregator
    />
  );
}
