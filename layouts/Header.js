import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import OutsideClickHandler from "react-outside-click-handler";

import Logo from "@/assets/images/logo.svg";
import Facebook from "@/assets/images/icons/facebook.svg";
import Instagram from "@/assets/images/icons/instagram.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const links = [
    {
      id: "location",
      label: "Nasze Lokalizacje",
      href: "/location",
      children: [
        {
          id: "new",
          label: "Nowy Wawer",
          href: "/location/new",
        },
        {
          id: "old",
          label: "Marysin Wawerski",
          href: "/location/old",
        },
      ],
    },
    { id: "parentZone", label: "Strefa Rodzica", href: "/zone" },
    { id: "gallery", label: "Galeria", href: "/gallery" },
    { id: "records", label: "Zapisy", href: "/records" },
    { id: "club", label: "Klubik Sezamkowo", href: "/club" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Kontakt", href: "/contact" },
  ];

  return (
    <div className="relative z-50 h-[72px] bg-white flex items-center justify-between shadow-header pl-[164px] pr-10">
      <Link href="/">
        <a>
          <Image src={Logo} />
        </a>
      </Link>
      <div className="h-full py-4 flex items-center">
        <ul className="h-full flex items-center">
          {links.map((link) => (
            <li key={link.id} className="h-full">
              {!link.children ? (
                <Link href={link.href}>
                  <a
                    className={`relative flex items-center h-full px-6 font-medium text-lg text-[#463F3A] cursor-pointer border-b-2 ${
                      link.href === router.pathname
                        ? `border-b-[#463F3A]`
                        : `hover:border-b-[#463F3A] border-b-white`
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ) : (
                <div className="h-full relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative flex items-center h-full px-6 font-medium text-lg text-[#463F3A] cursor-pointer border-b-2 ${
                      router.pathname.indexOf(link.href) !== -1
                        ? `border-b-[#463F3A]`
                        : `hover:border-b-[#463F3A] border-b-white`
                    }`}
                  >
                    {link.label}
                  </button>
                  {isOpen && (
                    <OutsideClickHandler
                      onOutsideClick={() => setIsOpen(false)}
                    >
                      <ul className="w-[236px] bg-white shadow-teamCard rounded-b-2xl px-4 py-2 absolute top-14 left-1/2 -translate-x-1/2">
                        {link.children.map((children) => (
                          <Link href={children.href}>
                            <a
                              onClick={() => setIsOpen(false)}
                              className="py-2 relative flex items-center h-full font-medium text-lg text-[#463F3A] cursor-pointer"
                            >
                              {children.label}
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </OutsideClickHandler>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
        <a href="https://facebook.com" className="flex ml-3">
          <Image src={Instagram} />
        </a>
        <a href="https://facebook.com" className="flex ml-3">
          <Image src={Facebook} />
        </a>
      </div>
    </div>
  );
};

export default Header;
