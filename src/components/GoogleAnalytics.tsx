'use client';

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

export default function GoogleAnalytics() {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(script2);
    };

    loadGoogleAnalytics();
  }, []);

  return null;
} 