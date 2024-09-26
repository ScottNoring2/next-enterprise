
import {useTranslations} from 'next-intl';
import HeaderAuth from 'components/header-auth';
import { hasEnvVars } from 'utils/supabase/check-env-vars';
import { EnvVarWarning } from 'components/env-var-warning';
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


type Props = {
    title: string;
};
export default function Header() {
    const t = useTranslations('Header');
   return (
      <header className="bg-slate-500 header top-0 left-0 z-40 flex w-full items-center sticky">
         
           {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
           <h1 className="text-xl text-red-600">{t('title')}</h1>
         
      </header>
   )
 }

Header.messages = ['Header'];





 