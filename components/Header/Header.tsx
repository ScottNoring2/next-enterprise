
import {useTranslations} from 'next-intl';
import Navigation from 'components/Navigation/Navigation';
import HeaderAuth from 'components/header-auth';
import { hasEnvVars } from 'utils/supabase/check-env-vars';
import { EnvVarWarning } from 'components/env-var-warning';
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { HtmlHTMLAttributes } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import BurgerMenuAuth from 'components/BurgerMenuAuth/BurgerMenuAuth';
import { createClient } from "utils/supabase/server";

//TODO: adjust variants per design needs
const header = cva(
    [
        "bg-blue-100", 
        "flex",
        "justify-between",
        "w-full",
        "sticky",
        "p-2",
        "pl-5",
        "pr-5",
        "border-b-2",
        "border-blue-700"
    ],
    {
      variants: {
        intent: {
          primary: [],
        },
      },
      defaultVariants: {
        intent: "primary"
      },
    }
  )
  
  const secondaryContent = cva(
    [
        "flex",
        "md:justify-end",
        "items-center"
     ],
    {
      variants: {
        intent: {
          primary: [],
        },
      },
      defaultVariants: {
        intent: "primary"
      },
    }
  )

export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof header>  {
    //href: string
  }
  
export default async function Header({ className, intent, ...props }: HeaderProps) {
    const t = useTranslations('Header');
    const {
        data: { user },
      } = await createClient().auth.getUser();
   return (
      <header>
          <h1 className="row-span-12 flex-grow md:flex-grow-0 flex items-center text-2xl bg-black text-white px-8 font-bold">{t('title')}</h1>
          {user &&
            <BurgerMenuAuth/>
          }
         {!user &&
            <BurgerMenu/>
          }
          <div className={twMerge(secondaryContent({ intent, className}))} {...props}>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
          </div>
        </header>
   )
 }

Header.messages = ['Header'];





 