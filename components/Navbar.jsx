'use client';
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import BIcon from "@/assets/bicon.svg";
import { useRouter } from "next/navigation";
import New from "@/assets/new.svg";
import Fav from "@/assets/fav.svg";
import Rising from "@/assets/rising.svg";
import Profile from "@/assets/profile.svg";
import Home from "@/assets/home.svg";
import Hot from "@/assets/hot.svg";
import Bottom from "@/assets/bottom.svg";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("/");

  const NavItem = ({ text, icon, link }) => (
    <button
      className={`px-[20px] py-[18px] flex rounded-[17px] h-16 items-center gap-4 font-semibold ${
        selected === link ? "bg-[#F8FFE6]/[.04] text-white" : "text-[#656565]"
      }`}
      onClick={() => {
        setSelected(link);
        router.push(link || "");
      }}
    >
      <Image
        src={icon}
        alt={text}
        className={`${!selected === link && "opacity-80"}`}
      />
      {text}
    </button>
  );

  return (
    <>
      <div className="relative bg-[#0f0f0f] flex flex-col border-b border-[#3D3D3D]/[.2]">
        <div className="px-10 h-20 flex items-center justify-between">
          <Image src={Logo} alt="logo" />
          <Image src={BIcon} alt="logo" />
        </div>
      </div>
      <div className="flex px-5 flex-col -mt-[160px]">
        <NavItem text="Home" icon={Home} link="/" />
        <NavItem text="Hot" icon={Hot} link="/hot" />
        <NavItem text="New" icon={New} link="/new"/>
        <NavItem text="Rising" icon={Rising} link="/rising" />
        <NavItem text="Favorites" icon={Fav} link="/fav" />
        <NavItem text="Profile" icon={Profile} link="/profile"/>
      </div>
      <div className="flex justify-around pb-24">
        <Image src={Bottom} alt="bottom" className="hover:cursor-pointer scale-110" />
      </div>
    </>
  );
};

export default Navbar;
