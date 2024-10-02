import {useTranslations} from 'next-intl';
import { cva, type VariantProps } from "class-variance-authority";
import { HtmlHTMLAttributes } from 'react';


type Props = {
    title: string;
  };
export default function Footer() {
    const t = useTranslations('Footer');
   return (
      <footer>
           <span className="text-xs">&copy;2024 Parlez. All rights reserved. </span>
           <h1>{t('title')}</h1>
       </footer>
   )
 }

Footer.messages = ['Footer'];
 