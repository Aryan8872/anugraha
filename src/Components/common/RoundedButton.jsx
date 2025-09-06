
const RoundedButton = ({ text, bgcolor, textcolor }) => {
    return (
        <button className={`w-auto self-start rounded-4xl sm:py-3 px-3 py-2 sm:px-5 font-dew-semibold ${bgcolor ? `bg-${bgcolor}` : 'bg-white'} ${textcolor ? `text-${textcolor}` : 'text-black'}`}>
            {text}
        </button>
    )
}

export default RoundedButton
