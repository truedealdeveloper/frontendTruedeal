'use client'

import { useEffect } from 'react'

type Props = { gtmId: string }

// Injects Google Tag Manager lazily after the page becomes idle.
// This avoids blocking the main thread during initial render (improves LCP/TBT).
export default function GtmLazy({ gtmId }: Props) {
    useEffect(() => {
        const loadGtm = () => {
            if (document.getElementById('gtm-script')) return

            const script = document.createElement('script')
            script.id = 'gtm-script'
            script.async = true
            script.defer = true
            script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `
            document.head.appendChild(script)
        }

        const anyWindow = window as unknown as { requestIdleCallback?: (cb: () => void) => number }
        if (typeof anyWindow.requestIdleCallback === 'function') {
            anyWindow.requestIdleCallback(() => loadGtm())
        } else {
            const t = setTimeout(loadGtm, 3500)
            return () => clearTimeout(t)
        }
    }, [gtmId])

    return null
}



