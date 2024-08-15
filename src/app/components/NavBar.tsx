"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Burger from "./Burger";
import { FormControl, MenuItem, Select } from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import css from './NavBar.module.css';

const NavBar: React.FC = () => {
  
  const pathname = usePathname();
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [burger]);
  return (
    <nav
      className={`relative flex justify-between items-center uppercase w-full py-4 px-6 bg-black text-white xl:px-12 lg:px-4 lg:py-14 text-xl 2xl:text-2xl  ${css.shimmerBorder}`}
    >
      <div className="hidden justify-start gap-2 xl:gap-6 xl:w-1/4 lg:flex w-1/3">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Головна
        </Link>
        <Image src={"/ear.svg"} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === "/products" ? "active" : ""}`}
          href="/products"
        >
          Продукція
        </Link>
        <Image src={"/ear.svg"} alt="ear" width={20} height={20} />
        <Link
          className={`link ${pathname === "/partners" ? "active" : ""}`}
          href="/partners"
        >
          Партнерство
        </Link>
      </div>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        <Image
          src={"/logoColored.png"}
          className="drop-shadow-2xl lg:absolute left-[36.5%] top-1 max-[1023px]:w-20 2xl:left-[42%] "
          alt="logo"
          width={290}
          height={290}
        />
      </Link>
      <div className="flex items-center gap-10 xl:w-1/3 lg:w-1/3 justify-end">
        <div className="hidden lg:flex gap-2 xl:gap-6">
          <Link
            className={`link ${pathname === "/news" ? "active" : ""}`}
            href="/news"
          >
            Новини
          </Link>
          <Image src={"/ear.svg"} alt="ear" width={20} height={20} />
          <Link
            className={`link ${pathname === "/contacts" ? "active" : ""}`}
            href="/contacts"
          >
            Контакти
          </Link>
          <Image src={"/ear.svg"} alt="ear" width={20} height={20} />
          <Link
            className={`link ${pathname === "/export" ? "active" : ""}`}
            href="/export"
          >
            Експорт
          </Link>
        </div>
        <LanguageSelector/>
        <button className="lg:hidden" onClick={() => setBurger(!burger)}>
        <Image
          src={"/menu.svg"}
          className="burger-menu-button"
          alt="menu"
          width={50}
          height={20}
        />
      </button>
      </div>
      
      {burger && <Burger setBurger={setBurger} />}
    </nav>
  );
};
export default NavBar;
