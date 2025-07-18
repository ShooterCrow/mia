import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
// import Footer from './Footer'


const Layout = () => {
    const location = useLocation()
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className='lg:mt-[30px] min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
