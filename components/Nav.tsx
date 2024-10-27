"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-transparent border-b border-gray-500 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <span className="ml-2 text-2xl font-semibold">Eframix</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-[#888] hover:text-black dark:hover:text-white"
            >
              <span>Showcase</span>
            </Link>
            <Link
              href="/docs"
              className="text-[#888] hover:text-black dark:hover:text-white"
            >
              <span>Docs</span>
            </Link>
          </div>
        </div>

        <div className="flex md:justify-between">
          <ModeToggle />

          <button
            className="md:hidden p-2 text-gray-500"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Docs
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Blog
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Resources
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  href="/docs/api"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  API Reference
                </Link>
                <Link
                  href="/docs/examples"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Examples
                </Link>
                <Link
                  href="/docs/tutorial"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Tutorials
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
