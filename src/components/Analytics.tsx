'use client';

import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

export default function AnalyticsScripts() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-NTPTHZPG" />
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NTPTHZPG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
} 