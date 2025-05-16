"use client";

import { twMerge } from "tailwind-merge";
import WalletWrapper from "../onchain/WalletWrapper";

export default function SignupButton({ className }: { className?: string }) {
  return (
    <WalletWrapper
      className={twMerge(
        "ockConnectWallet_Container w-full h-[50px] rounded-3xl bg-[#323232] text-base font-medium my-[10px]",
        className
      )}
      text="Connect wallet"
    />
  );
}
