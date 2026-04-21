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
      "font-semibold transition duration-200 uppercase",
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
        {/* Logo */}
        <NavLink to="/" className="flex items-center drop-shadow-md">
          <img src={logo} alt="Logo" className="h-20 w-fit" />
        </NavLink>

        {/* ===== Desktop nav ===== */}
        <nav className="hidden md:flex gap-12 text-[13px] uppercase font-bold items-center">
          <ul className="flex flex-col gap-3 text-left">
            <li>
              <NavLink to="/about-us" className={navLinkClass}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <a href="https://pgda.adclubmadras.com/" target="_blank" rel="noopener noreferrer" className={navLinkClass({ isActive: false })}>
                PROGRAMMES
              </a>
            </li>
            <li>
              <NavLink to="/membership" className={navLinkClass}>
                BECOME A MEMBER
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 text-left">
            <li>
              <NavLink to="/events" className={navLinkClass}>
                Ad &apos;Clubbin&apos; Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className={navLinkClass}>
                CAREER
              </NavLink>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 text-left">
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/press-release" className={navLinkClass}>
                PRESS RELEASE
              </NavLink>
            </li>
            <li>
              <NavLink to="/headline" className={navLinkClass}>
                HEADLINE
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div className="relative group ml-4">
              <button className="font-bold text-primary font-asgard focus:outline-none">
                {user.firstName || "Member"}
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="invisible group-hover:visible group-hover:opacity-100 absolute right-0 mt-3 w-44 bg-blue-50 text-black rounded-md shadow-lg opacity-0 transition-all duration-300 z-50 overflow-hidden"
              >
                <NavLink
                  to="/profile"
                  onClick={closeMenu}
                  className="block w-full px-4 py-2 hover:bg-primary hover:text-white font-asgard transition"
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white font-asgard transition border-t border-black/5"
                >
                  Logout
                </button>
              </motion.div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={[
                "ml-4 text-primary font-asgard font-extrabold",
                "px-3 py-1.5 rounded-md hover:bg-white/5",
              ].join(" ")}
            >
              Members Login
            </NavLink>
          )}
        </nav>

        {/* ===== Hamburger ===== */}
        <button
          className="md:hidden z-50 text-white"
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
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 p-8 z-[100] flex flex-col gap-6 text-[14px] uppercase font-bold shadow-2xl transition-colors ${darkMode ? "bg-black text-white" : "bg-black text-white"
          }`}
      >
        <button
          className="self-end mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/10"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <NavLink to="/about-us" onClick={closeMenu} className={navLinkClass}>
          ABOUT US
        </NavLink>
        <a href="https://pgda.adclubmadras.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={navLinkClass({ isActive: false })}>
          PROGRAMMES
        </a>
        <NavLink to="/membership" onClick={closeMenu} className={navLinkClass}>
          BECOME A MEMBER
        </NavLink>
        <NavLink to="/events" onClick={closeMenu} className={navLinkClass}>
          Ad &apos;Clubbin&apos; Calendar
        </NavLink>
        <NavLink to="/gallery" onClick={closeMenu} className={navLinkClass}>
          GALLERY
        </NavLink>
        <NavLink to="/career" onClick={closeMenu} className={navLinkClass}>
          CAREER
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
          CONTACT
        </NavLink>
        <NavLink
          to="/press-release"
          onClick={closeMenu}
          className={navLinkClass}
        >
          Press Release
        </NavLink>

        {user ? (
          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="font-extrabold font-asgard text-primary mb-4">
              {user.firstName || "Member"}
            </p>
            <NavLink to="/profile" onClick={closeMenu} className="block py-2 text-white/70 hover:text-primary transition">
              My Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 text-primary font-bold hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            onClick={closeMenu}
            className="mt-auto text-center bg-primary text-black py-3 rounded-md font-bold tracking-wider"
          >
            Members Login
          </NavLink>
        )}
      </motion.div>

      {/* ===== Backdrop ===== */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-[90]"
        />
      )}
    </>
  );
}
