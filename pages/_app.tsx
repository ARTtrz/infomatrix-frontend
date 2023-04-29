import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import MainProvider from '@/src/providers/MainProvider'
import '@/styles/globals.scss'

export default function MyApp({ Component, pageProps }: any) {
	const [showChild, setShowChild] = useState(false)
	useEffect(() => {
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}

	if (typeof window === 'undefined') {
		return <></>
	} else {
		return (
			<MainProvider>
				<Component {...pageProps} />
			</MainProvider>
		)
	}
}
