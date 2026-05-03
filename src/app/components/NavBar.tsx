"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experiences",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contacts",
  },
];

const NavBar = () => {
  const [navbarOpen, setNarbarOpen] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4 md:px-12">
      <div className="flex w-full flex-wrap items-center justify-between">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] md:text-5xl"
        >
          AZ
        </Link>
        <div className="block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNarbarOpen(false)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNarbarOpen(true)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!navbarOpen ? <MenuOverlay links={navLinks} /> : null}{" "}
    </nav>
  );
};

export default NavBar;
