"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={24} />,
      href: "https://www.facebook.com/SheikhGulzarMPA",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      href: "https://www.twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com",
      color: "hover:text-blue-700",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={24} />,
      href: "https://www.youtube.com",
      color: "hover:text-red-600",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={24} />,
      href: "https://www.tiktok.com/@mpa.sheikhgulzarahmad?_r=1&_t=ZS-93YWW2fYxiq",
      color: "hover:text-[#69C9D0]",
    },
  ];

  return (
    <footer className="bg-[#ebf2ff] text-black py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-6 justify-center md:justify-end">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;