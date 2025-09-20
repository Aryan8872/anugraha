import { Outlet } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'

const MainLayout = () => {
    return (

        <>
            <Navbar />
            <main className='bg-primary-bg'>

                <Outlet />
                {/* <Footer/> */}
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout
