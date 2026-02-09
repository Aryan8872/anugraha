import RoundedButton from "./common/RoundedButton"

const BottomOffer = () => {
    return (
        <section className='relative flex  bg-darkgreen-secondary w-full h-[360px]'>
            <div className='flex flex-col gap-15 my-auto pl-6 md:pl-10  lg:pl-24 w-[47%] md:w-[52%] lg:w-[45%] text-left'>
                <span className='font-dew-semibold text-lg sm:text-2xl lg:text-4xl text-white'>Do you want a T-Shirt with an excellent print for a great discount?</span>
                <RoundedButton text={"Explore more"} />
            </div>

            <div className='absolute right-0 lg:right-[10%]  h-full '>
                <img loading='lazy' src={"/tshirts/lamb99/lamb1.jpg"} className='h-full w-48 sm:w-64  object-contain sm:object-cover'/>
                <div className='absolute right-32 shadow-md sm:right-64 top-14 flex flex-col  font-dew-expanded-semibold text-xl sm:text-2xl  text-white bg-black/45 border-[1.3px] items-center justify-center border-white rounded-full h-10 w-10 sm:h-28 sm:w-28 p-10 sm:p-16 lg:p-10'>
                    <span>30%</span>
                    <span>OFF</span>

                </div>

            </div>

        </section>
    )
}

export default BottomOffer
