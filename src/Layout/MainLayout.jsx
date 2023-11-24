"use client";
import React, { useContext } from "react";
import Link from "next/link";

import MainHeader from "./MainHeader";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";

function MainLayout({ children }) {
  const {open} = useContext(MenuContext)

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />

      <div className="flex justify-start items-start">
        <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${open ? "w-60 p-4" : "w-0"}`}>
          <ul>
            <li className="main-layout-items">
              <AiOutlineHome className="mr-2"/>
              <Link href="/">Home</Link>
            </li>
            <li className="main-layout-items">
              <GrProjects className="mr-2"/>
              <Link href="/"  className="flex-1">Projects</Link>
              <FaAngleRight />
            </li>
            <li className="main-layout-items">
              <FaCheck className="mr-2"/>
              <Link href="/" className="flex-1">Singule</Link>
              <FaAngleRight />
            </li>
            <li className="main-layout-items">
              <FaCheckDouble className="mr-2"/>
              <Link href="/" className="flex-1">Complex</Link>
              <FaAngleRight />
            </li>
            <li className="main-layout-items">
              <FiPhoneCall className="mr-2"/>
              <Link href="/contact-us" className="flex-1">Contact us</Link>
            </li>
            <li className="main-layout-items">
              <SiHelpscout className="mr-2"/>
              <Link href="/about-us" className="flex-1">About us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
