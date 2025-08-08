'use client';

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

export default function GoogleAnalytics() {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      if (document.getElementById('ga-gtag-src')) return;

      const script1 = document.createElement('script');
      script1.id = 'ga-gtag-src';
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script1.async = true;
      script1.defer = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'ga-gtag-init';
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
      `;
      document.head.appendChild(script2);
    };

    // Prefer requestIdleCallback; fallback to a timeout
    const anyWindow = window as unknown as { requestIdleCallback?: (cb: () => void) => number };
    if (typeof anyWindow.requestIdleCallback === 'function') {
      anyWindow.requestIdleCallback(() => loadGoogleAnalytics());
    } else {
      const timer = setTimeout(loadGoogleAnalytics, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}