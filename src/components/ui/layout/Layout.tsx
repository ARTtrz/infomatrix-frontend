import { FC } from 'react'

import { LayoutProps } from './Layout.props'
import Footer from './footer/Footer'
import Header from './header/Header'
import UnderHeader from './underheader/UnderHeader'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className='min-h-full relative'>
			<Header />
			<UnderHeader />
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
