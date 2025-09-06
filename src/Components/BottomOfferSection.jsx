import RoundedButton from './common/RoundedButton'
import bottomshirt from "/tshirts/bottom.png"
const BottomOffer = () => {
    return (
        <section className='relative flex rounded-4xl bg-darkgreen-secondary w-full h-[360px]'>
            <div className='flex flex-col gap-15 my-auto pl-6 md:pl-10  lg:pl-24 w-[47%] md:w-[52%] lg:w-[45%] text-left'>
                <span className='font-dew-expanded-semibold text-xl sm:text-2xl lg:text-4xl text-white'>Do you want a hoodie with an excellent print for a great discount?</span>
                <RoundedButton text={"Explore more"} />
            </div>

            <div className='absolute right-0 lg:right-[10%]  h-full '>
                <img src={bottomshirt} className='h-full w-48 sm:w-64  object-contain sm:object-cover'/>
                <div className='absolute right-32 shadow-md sm:right-56 top-14 flex flex-col  font-dew-expanded-semibold text-xl sm:text-3xl lg:text-5xl text-white bg-black/45 border-[1.3px] items-center justify-center border-white rounded-full h-10 w-10 sm:h-28 sm:w-28 p-10 sm:p-16 lg:p-20'>
                    <span>60%</span>
                    <span>OFF</span>

                </div>

            </div>

        </section>
    )
}

export default BottomOffer
