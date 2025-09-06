import { BiHeart, BiMenu, BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import logo from "/logo/anugraha.png"
const Navbar = () => {
    const navigate = useNavigate()
    const navbarLinks = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About",
            path: "/about"
        },

        {
            label: "Gallery",
            path: "/gallery"
        },

        {
            label: "Contact",
            path: "/contact"
        },
    ]
    return (
        <div className='w-full flex justify-between py-6 px-10 lg:px-16  2xl:px-36 shadow-md items-center'>
            <div className="h-[50px] w-[200px]">
                <img src={logo} className="w-full h-full object-contain" />
            </div>

            <div className="hidden lg:flex gap-10 items-center">
                {
                    navbarLinks.map((link, index) => (
                        <>
                            <span key={index} className="font-dew-semibold cursor-pointer hover:underline" onClick={() => navigate(link.path)}>{link.label}</span>
                        </>
                    ))
                }
            </div>

            <BiMenu size={45} className="cursor-pointer flex lg:hidden hover:bg-image-bg-color/40 hover:shadow-md rounded-full p-2 transition-colors duration-200"/>

            <div className="hidden lg:flex gap-6">
                <BiSearch className="cursor-pointer" size={20} />
                <BiHeart className="cursor-pointer" size={20} />
                <BsBag className="cursor-pointer" size={20} />

            </div>
        </div>
    )
}

export default Navbar
