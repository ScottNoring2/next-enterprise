
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
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
         <Navbar.Link href="/">{t('index')}</Navbar.Link>
        <Navbar.Link href="#">{t('about')}</Navbar.Link>
        <Navbar.Link href="#">
        <Dropdown
          className="nav-dropdown"
          arrowIcon={true}
          inline
          label={t('account')}
         >
          {/*<Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>*/}
          <Dropdown.Item>
            <Link href="/sign-in">{t('signin')}</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/sign-up">{t('signup')}</Link>
          </Dropdown.Item>
         {/*<Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>*/}
        </Dropdown>
        <Navbar.Toggle />
      </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
PzFlowbiteReactNavbar.messages = ['Navigation'];