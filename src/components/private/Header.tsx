import Link from "next/link";
import React from "react";
import Logo from "@app/asessts/logo.png";
import Image from "next/image";
import { Button } from "../ui/Button";

const Header = () => {
  return (
    <div className="w-full  bg-[#155C9B] h-[4rem] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" loading="lazy" className="w-20" />
          <div className="flex gap-4 items-center">
            <Button className="rounded-[5px] bg-[#222142] text-white px-4 border border-[#FEDC32] py-2 text-sm">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
