"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import Link from 'next/link';

const NavLink = ({ to, className, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === to || pathname.startsWith(to + '/');
  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;
  return (
    <Link href={to} className={computedClassName} onClick={onClick}>
      {children}
    </Link>
  );
};

import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const logo = "/ad-logo.png";
import { useTheme } from "@/context/ThemeContext";
import Swal from "sweetalert2";
import { getUserDetails } from "@/api/api";

export default function Navbar() {
  const { darkMode } = useTheme();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check login status
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const storedRaw = localStorage.getItem("user");

    if (!isAuthenticated || !storedRaw) {
      setUser(null);
      return;
    }

    try {
      const parsedUser = JSON.parse(storedRaw);
      setUser(parsedUser || null);
    } catch (error) {
      console.error("Invalid user JSON in localStorage:", error);
      setUser(null);
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout",
    });

    if (result.isConfirmed) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      closeMenu();

      Swal.fire(
        "Logged Out",
        "You have been logged out successfully.",
        "success",
      ).then(() => {
        window.location.href = "/";
      });
    }
  };

  // 🔥 Active highlight styles for NavLink
  const navLinkClass = ({ isActive }) =>
    [
      "font-semibold transition duration-200",
      "px-3 py-1.5 rounded-md", // pill shape
      isActive
        ? "text-primary font-asgard" // ACTIVE
        : "hover:text-primary hover:bg-white/5", // HOVER
    ].join(" ");

  return (
    <>
      {/* ===== Header ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between py-2 px-6 md:px-12 transition-colors duration-500 text-white ${scrolled ? "backdrop-blur bg-black/80 shadow-md" : "bg-black"
          }`}
      >
        {/* Logo - Removing all sizing constraints to let it show its actual literal size */}
        <NavLink to="/" className="flex items-center drop-shadow-md">
          <img src={logo} alt="Logo" className="h-20 w-full" />
        </NavLink>

        {/* ===== Desktop nav ===== */}
        <nav className="hidden md:flex gap-10 text-sm uppercase font-medium items-center">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/about-us" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              {/* External link */}
              <a href="https://pgda.adclubmadras.com/" target="_blank" rel="noopener noreferrer" className={navLinkClass({ isActive: false })}>
                Courses
              </a>
            </li>
            <li>
              <NavLink to="/membership" className={navLinkClass}>
                Membership
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="group relative">
              <div className="flex items-center">
                <NavLink to="/events" className={navLinkClass}>
                  Events
                </NavLink>
                <ChevronDown className="h-4 w-4 text-white/70" />
              </div>
              <div className="invisible absolute left-0 top-full z-50 mt-1 w-52 rounded-md border border-white/10 bg-black/95 p-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <NavLink
                  to="/events/inspire"
                  className="block rounded-md px-3 py-2 font-glancyr text-xs normal-case text-white hover:bg-white/10 hover:text-primary"
                >
                  Inspire Events
                </NavLink>
                <NavLink
                  to="/events/educate"
                  className="block rounded-md px-3 py-2 font-glancyr text-xs normal-case text-white hover:bg-white/10 hover:text-primary"
                >
                  Educate Events
                </NavLink>
                <NavLink
                  to="/events/engage"
                  className="block rounded-md px-3 py-2 font-glancyr text-xs normal-case text-white hover:bg-white/10 hover:text-primary"
                >
                  Engage Events
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className={navLinkClass}>
                Career
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li>
              {" "}
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/press-release" className={navLinkClass}>
                Press Release
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/headline" className={navLinkClass}>
                HEADLINE
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div className="relative group ml-4">
              <button className="font-bold text-primary font-primary focus:outline-none">
                {user.firstName || "Member"}
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="invisible group-hover:visible group-hover:opacity-100 absolute right-0 mt-3 w-44 bg-white text-black rounded-md shadow-lg opacity-0 transition-all duration-300 z-50"
              >
                <NavLink
                  to="/profile"
                  onClick={closeMenu}
                  className="block w-full px-4 py-2 hover:bg-primary hover:text-white font-primary transition"
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white font-primary transition"
                >
                  Logout
                </button>
              </motion.div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={[
                "ml-4 text-primary font-primary font-bold",
                "px-3 py-1.5 rounded-md hover:bg-white/5",
              ].join(" ")}
            >
              Members Login
            </NavLink>
          )}
        </nav>

        {/* ===== Hamburger ===== */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* ===== Mobile Drawer ===== */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 p-8 z-40 flex flex-col gap-6 text-sm uppercase font-medium shadow-2xl transition-colors ${darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        <button
          className="self-end mb-4"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <NavLink to="/about-us" onClick={closeMenu} className={navLinkClass}>
          About Us
        </NavLink>
        <a href="https://pgda.adclubmadras.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={navLinkClass({ isActive: false })}>
          Courses
        </a>
        <NavLink to="/membership" onClick={closeMenu} className={navLinkClass}>
          Membership
        </NavLink>
        <NavLink to="/events" onClick={closeMenu} className={navLinkClass}>
          Events
        </NavLink>
        <NavLink to="/events/inspire" onClick={closeMenu} className={navLinkClass}>
          Inspire Events
        </NavLink>
        <NavLink to="/events/educate" onClick={closeMenu} className={navLinkClass}>
          Educate Events
        </NavLink>
        <NavLink to="/events/engage" onClick={closeMenu} className={navLinkClass}>
          Engage Events
        </NavLink>
        <NavLink to="/gallery" onClick={closeMenu} className={navLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/career" onClick={closeMenu} className={navLinkClass}>
          Career
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
          Contact
        </NavLink>
        <NavLink
          to="/press-release"
          onClick={closeMenu}
          className={navLinkClass}
        >
          Press Release
        </NavLink>

        {user ? (
          <>
            <p className="font-bold font-primary text-primary">
              {" "}
              {user.firstName || "Member"}{" "}
            </p>
            <NavLink to="/profile" onClick={closeMenu} className={navLinkClass}>
              My Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-primary font-primary font-bold hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            onClick={closeMenu}
            className={[
              "font-bold font-primary text-primary",
              "px-3 py-1.5 rounded-md hover:bg-white/5",
            ].join(" ")}
          >
            Members Login
          </NavLink>
        )}
      </motion.div>

      {/* ===== Backdrop ===== */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
        />
      )}
    </>
  );
}
