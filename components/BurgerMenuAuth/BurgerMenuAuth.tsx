'use client'
import { useState,useEffect } from "react"; // import state
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import { ButtonSubmit } from "components/ButtonSubmit/ButtonSubmit";
import { signOutAction } from "src/app/actions";
import { initFlowbite } from 'flowbite'


export default function BurgerMenuAuth() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const t = useTranslations('Navigation');
// initialize components based on data attribute selectors
  useEffect(() => {
    initFlowbite();
  });

  return (
   <>  
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
    
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-auto md:block absolute md:relative xs:top-6 sm:top-6 md:top-0 mt-5 md:m-0" id="navbar-default">
        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-900  md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t('index')}</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t('about')}</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{t('account')} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>
                 {/* Dropdown menu */}
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="p-3 text-sm text-black dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li className="py-1 px-1 border-b-2 border-solid border-black">
                    <Link href="/protected/account-update" className="block  text-black  hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t('accountupdate')}</Link>
                </li>
                  <li className="py-1 px-1 border-b-2 border-solid border-black">
                    <form action={signOutAction} className="flex items-center whitespace-nowrap">
                      <ButtonSubmit intent="navItem" size="navItem" className="hover:bg-white hover:text-black">
                        {t('signout')}
                      </ButtonSubmit>
                    </form>
                </li>
          
                </ul>
              
            </div>
            </li>
         </ul>
        </div>
    </div>
    </nav>
   </>
  );
}

BurgerMenuAuth.messages = ['Navigation'];