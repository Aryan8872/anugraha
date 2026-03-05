"use client";
import { BiHeart, BiMenu, BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [showSideMenu, ShowSideMenu] = useState(false);
  const [showNavbar, SetShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      SetShowNavbar(
        currentScrollPos === 0 ||
          currentScrollPos <= lastScrollPos ||
          currentScrollPos <= 20,
      );
      lastScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navbarLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Browse",
      path: "/browse",
    },

    {
      label: "collections",
      path: "/collections",
    },

    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div
        className={`${showNavbar ? "translate-y-0" : "-translate-y-full"} sticky top-0 z-[90] transition-all duration-300 ease-in-out bg-white w-full flex justify-between py-3 px-8  items-center`}
      >
        <div className="">
          <Image
            alt="anugraha logo"
            height={50}
            width={80}
            loading="lazy"
            src={"/logo/anugraha2.png"}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="lg:flex hidden  flex-row gap-8">
          {navbarLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className=" font-clash-display font-medium text-sm  uppercase cursor-pointer hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <BiMenu
          size={45}
          onClick={() => ShowSideMenu(!showSideMenu)}
          className="cursor-pointer flex lg:hidden hover:bg-image-bg-color/40 hover:shadow-md rounded-full p-2 transition-colors duration-200"
        />

        <div className="hidden lg:flex gap-6">
          <BiSearch className="cursor-pointer" size={20} />
          <BiHeart className="cursor-pointer" size={20} />
          <BsBag className="cursor-pointer" size={20} />
        </div>
      </div>

      <div
        className={`lg:hidden ${showSideMenu ? "translate-y-0" : "-translate-y-full"} fixed transition-all ease-in-out duration-300 inset-0 z-[9999] w-screen h-screen bg-black/60`}
      >
        <div className="flex absolute bg-white shadow-md left-[50%] -translate-x-1/2 w-full h-full">
          <CgClose
            onClick={() => ShowSideMenu(false)}
            size={30}
            className="absolute top-6 right-6"
          />
          <div className="flex flex-col gap-5 w-full px-7 h-full justify-center items-start">
            {navbarLinks.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="font-dew-semibold text-xl w-full cursor-pointer hover:underline"
                onClick={() => {
                  ShowSideMenu(false);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
