import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import Layout from '../components/ui/layout/Layout'

import HeadProvider from './HeadProvider/HeadProvider'

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false
// 		}
// 	}
// })

export interface MainProviderProps {
	children: ReactNode
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
	return <HeadProvider>{children}</HeadProvider>
}
export default MainProvider

// QueryClientProvider - для подключения БД
