
"use client";

import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {useTranslations} from 'next-intl';

export function PzFlowbiteReactNavbar() {
  const t = useTranslations('Navigation');
  return (
    <Navbar fluid className="burgerMenu">
      {/*<Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>*/}
      <Navbar.Toggle />
      <Navbar.Collapse className="nav-dropdown-container">
        <Navbar.Link href="/">{t('index')}</Navbar.Link>
        <Navbar.Link href="/about">{t('about')}</Navbar.Link>
        <Navbar.Link href="/sign-in">{t('signin')}</Navbar.Link>
        <Navbar.Link href="/sign-up">{t('signup')}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
PzFlowbiteReactNavbar.messages = ['Navigation'];