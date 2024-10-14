'use client'

import { Suspense } from 'react'

import {useTranslations} from 'next-intl';
import PzHero from "components/PzHero/PzHero";
import { ContentfulHomepage } from 'components/PzContentful/PzContentful';

export default function Homepage() {
  const t = useTranslations('HomePage');
  const c = useTranslations('Contentful');

  return (
    <>
      <PzHero className="hero-homepage" image="./images/StockCake-Networking-business-event_1728314513.jpg" title={t('heroTitle')} tagline={t('heroTagline')}/>
       <Suspense>
            <ContentfulHomepage/>
       </Suspense>
    </>
  )
}
