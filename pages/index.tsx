import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import Home from '@/src/components/screens/home/Home'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage
