import { BiCopyright } from "react-icons/bi"
import facebook from "/icons/facebook.webp"
import instagram from "/icons/instagram.webp"
import whatsapp from "/icons/whatsapp.webp"
import x from "/icons/x.webp"
import logo from "/logo/anugraha.png"

const Footer = () => {
  return (
    <div className="relative px-20 pt-16 py-20 bg-primary-bg w-full">
      <div className='grid grid-cols-4 w-ful mb-5' >
        <div className="flex flex-col gap-2 w-full text-left ">
          <img src={logo} className="h-20 w-44" />
          <span className="font-dew-bold leading-6 tracking-wider"> Laxmipur,Kankai-01, Jhapa</span>
          <span className="font-dew-bold leading-6 tracking-wider">joelghale@gmail.com</span>
        </div>
        <div className="flex flex-col  gap-3 w-full text-left ">
          <span className="font-dew-bold pointer-events-none">Menu</span>
          <span className="cursor-pointer font-dew-semibold hover:text-black mt-3 text-black/65">Home</span>
          <span className="cursor-pointer font-dew-semibold hover:text-black text-black/65">About</span>
          <span className="cursor-pointer font-dew-semibold hover:text-black text-black/65">Gallery</span>
          <span className="cursor-pointer font-dew-semibold hover:text-black text-black/65">Contact</span>
        </div>
        <div className="flex flex-col  gap-3 w-full text-left ">
          <span className="font-dew-bold pointer-events-none">Social Links</span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black mt-3 text-black/65">
            Cart
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            Wishlist
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            Account
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            Privacy and policy
          </span>
        </div>
        <div className="flex flex-col  gap-3 w-full text-left ">
          <span className="font-dew-bold pointer-events-none">Social Links</span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black mt-3 text-black/65">
            <img src={instagram} className="h-[20px] w-[20px]" />
            Instagram
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            <img src={facebook} className="h-[20px] w-[20px]" />
            Facebook
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            <img src={x} className="h-[20px] w-[20px]" />
            X
          </span>
          <span className="flex gap-3 items-center cursor-pointer font-dew-semibold hover:text-black text-black/65">
            <img src={whatsapp} className="h-[20px] w-[20px]" />
            Whatsapp
          </span>
        </div>
      </div>

      <div className="absolute flex justify-center bottom-0 py-3 left-[20%]   w-[60%] mx-auto rounded-t-4xl bg-white shadow-md ">
          <span className="flex gap-2 font-dew-semibold text-black/45  items-center">Copyright <BiCopyright/> Anugraha. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer
