"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/(home)/components/Header";
import Header2 from "./Header2";

const HeaderSwitcher = () => {
  const pathname = usePathname();

  // Only show Header on home page
  if (pathname === "/") {
    return <Header />;
  }

  // Show Header2 on all other pages
  return <Header2 />;
};

export default HeaderSwitcher;
