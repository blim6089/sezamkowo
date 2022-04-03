import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import OutsideClickHandler from "react-outside-click-handler";

import Logo from "@/assets/images/logo.svg";
import Facebook from "@/assets/images/icons/facebook.svg";
import Instagram from "@/assets/images/icons/instagram.svg";
import Menu from "@/assets/images/icons/menu.svg";
import Close from "@/assets/images/icons/close.svg";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
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

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setIsOpenMobileMenu(false);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        setIsOpenMobileMenu(false);
      });
    };
  }, [router.events]);

  return (
    <div className="relative z-50 h-[104px] md:h-[72px] bg-white flex items-end md:items-center justify-between shadow-header pl-5 2xl:pl-16 pr-5 pb-6 md:pb-0">
      <Link href="/">
        <a className="flex w-[190px] md:w-auto shrink-0">
          <Image src={Logo} />
        </a>
      </Link>
      <button
        className="flex xl:hidden absolute right-6 z-50"
        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
      >
        {!isOpenMobileMenu ? <Image src={Menu} /> : <Image src={Close} />}
      </button>
      <div
        className={`bg-white absolute xl:relative top-0 xl:top-auto left-0 xl:left-auto w-full xl:w-auto h-screen xl:h-full pt-[104px] xl:py-4 xl:flex items-center px-6 xl:px-0 ${
          isOpenMobileMenu ? `` : `hidden`
        }`}
      >
        <ul className="h-auto xl:h-full flex flex-col xl:flex-row xl:items-center pb-5 xl:pb-0 border-b xl:border-b-0 border-b-[#646464] mb-5 xl:mb-0">
          <li className="flex xl:hidden h-full">
            <Link href="/location/new">
              <a className="relative flex items-center h-full py-[15px] font-medium text-2xl text-[#463F3A] cursor-pointer">
                Nowy Wawer
              </a>
            </Link>
          </li>
          <li className="flex xl:hidden h-full">
            <Link href="/location/old">
              <a className="relative flex items-center h-full py-[15px] font-medium text-2xl text-[#463F3A] cursor-pointer">
                Marysin Wawerski
              </a>
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.id} className="h-full">
              {!link.children ? (
                <Link href={link.href}>
                  <a
                    className={`relative flex items-center h-full py-[15px] xl:py-0 px-0 xl:px-3 2xl:px-6 font-medium text-2xl xl:text-base 2xl:text-lg text-[#463F3A] cursor-pointer border-b-0 xl:border-b-2 ${
                      link.href === router.pathname
                        ? `border-b-[#463F3A]`
                        : `hover:border-b-[#463F3A] border-b-white`
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ) : (
                <div className="hidden xl:block h-full relative">
                  <button
                    onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
                    className={`relative flex items-center h-full px-0 xl:px-3 2xl:px-6 font-medium text-2xl xl:text-base 2xl:text-lg text-[#463F3A] cursor-pointer border-b-2 ${
                      router.pathname.indexOf(link.href) !== -1
                        ? `border-b-[#463F3A]`
                        : `hover:border-b-[#463F3A] border-b-white`
                    }`}
                  >
                    {link.label}
                  </button>
                  {isOpenSubMenu && (
                    <OutsideClickHandler
                      onOutsideClick={() => setIsOpenSubMenu(false)}
                    >
                      <ul className="w-[236px] bg-white shadow-teamCard rounded-b-2xl px-4 py-2 absolute top-14 left-1/2 -translate-x-1/2">
                        {link.children.map((children, index) => (
                          <Link href={children.href} key={index}>
                            <a
                              onClick={() => setIsOpenSubMenu(false)}
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
        <div className="flex items-center justify-end">
          <a
            href="https://facebook.com"
            className="w-[50px] xl:w-8 flex ml-7 xl:ml-3"
          >
            <Image src={Instagram} />
          </a>
          <a
            href="https://facebook.com"
            className="w-[50px] xl:w-8 flex ml-7 xl:ml-3"
          >
            <Image src={Facebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
