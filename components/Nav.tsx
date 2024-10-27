"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";
import { Button } from "./ui/button";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="relative bg-black bg-opacity-50 border-b border-gray-500 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <span className="ml-2 text-2xl font-semibold text-white">Eframix</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-[#888] hover:text-white transition-colors duration-300"
            >
              <span>Showcase</span>
            </Link>
            <Link
              href="/docs"
              className="text-[#888] hover:text-white transition-colors duration-300"
            >
              <span>Docs</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-0 md:justify-between">
          <Button
            variant={"outline"}
            size={"icon"}
            className="md:hidden w-12"
            onClick={toggleMobileMenu}
          >
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute md:hidden bg-white dark:bg-background w-full border-t border-gray-200">
          <Link href="/" className="block p-4 text-[#888] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            Showcase
          </Link>
          <Link href="/docs" className="block p-4 text-[#888] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            Docs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
