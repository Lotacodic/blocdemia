"use client";

import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";

type WalletWrapperProps = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};

export default function WalletWrapper({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperProps) {
  return (
    <Wallet className="w-full">
      <ConnectWallet
        withWalletAggregator={withWalletAggregator}
        text={text}
        className={className}
      >
        <Avatar className="h-6 w-6" />
        <Name className="text-white" />
      </ConnectWallet>

      <WalletDropdown>
        <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
          <Avatar />
          <Name />
          <Address />
          <EthBalance />
        </Identity>

        <WalletDropdownBasename />

        <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
          Go to Wallet Dashboard
        </WalletDropdownLink>

        <WalletDropdownFundLink />

        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  );
}
