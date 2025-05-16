"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import logo from "@/assets/images/logo.png";
import settingsIcon from "@/assets/images/icons/setting.png";
import userIcon from "@/assets/images/icons/user-profile.png";
import { routes } from "@/routes";

interface SidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <aside
      className={twMerge(
        "w-[205px] bg-[#1a1a1a] h-screen px-3 pt-4 fixed z-10",
        !open && "max-sm:hidden"
      )}
    >
      <div className="pl-[9px] mb-[36px]">
        <Image
          src={logo}
          alt="Blocdemia logo"
          width={130}
          height={30}
          className="object-contain"
          unoptimized
          quality={100}
        />
      </div>

      <nav className="flex flex-col h-[80%]">
        <div className="flex flex-col flex-1">
          {routes.map(({ name, link, icon }) => (
            <Link
              key={name}
              href={link}
              className={twMerge(
                "flex items-center gap-2 px-[12px] py-[16px] w-full font-medium text-sm leading-[22px] cursor-pointer",
                isActive(link) && "bg-[#9633FF] rounded-[18px]"
              )}
            >
              <Image
                src={icon}
                alt={name}
                width={16}
                height={16}
                unoptimized
                quality={100}
              />
              {name}
            </Link>
          ))}
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {[
            { href: "#settings", icon: settingsIcon, label: "Settings" },
            { href: "#profile", icon: userIcon, label: "Profile" },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className={twMerge(
                "flex items-center gap-2 px-[12px] py-[16px] w-full text-white font-medium text-sm leading-[22px] rounded-[18px]",
                isActive(href) && "bg-[#9633FF]"
              )}
            >
              <Image
                src={icon}
                alt={label.toLowerCase()}
                width={16}
                height={16}
                unoptimized
                quality={100}
              />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
