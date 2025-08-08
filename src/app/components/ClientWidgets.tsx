'use client'

import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Chatbot = dynamic(() => import('./chatbot/Chatbot').then(m => m.Chatbot), {
    ssr: false,
    loading: () => null,
})

const TripPlanPopup = dynamic(() => import('@/components/TripPlanPopup').then(m => m.default), {
    ssr: false,
    loading: () => null,
})

export default function ClientWidgets() {
    return (
        <>
            <Chatbot />
            <TripPlanPopup />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}


