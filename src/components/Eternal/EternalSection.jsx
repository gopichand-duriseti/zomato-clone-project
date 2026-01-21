import ExternalIcons from "./EternalIcons"

const EternalSection = () => {
    return (
        <div className=" flex flex-col gap-1 p-10 mt-20 items-center justify-center">
            <div className="font-extrabold text-[75px]">eternal</div>
            <div className="flex items-center justify-center align-middle gap-2">
                <div className="w-40 h-[3px] bg-gradient-to-r from-white to-gray-300"></div>
                <span className=" flex flex-col items-center text-3xl gap-1 text-gray-500 text-extrabold">
                    <span>POWERING INDIA'S</span>
                    <span>CHANGING LIFESTYLES</span>
                </span>
                <div className="w-40 h-[3px] bg-gradient-to-r from-gray-300 to-white"></div>
            </div>
            <div className="flex gap-9 mt-9">
                <ExternalIcons className="text-center w-60 border-3 border-pink-100 bg-gradient-to-bl from-pink-200 to-pink-100 p-7 pl-5 pr-5 rounded-4xl flex flex-col items-center justify-center align-middle gap-2"
                    imgUrl={"/assets/zomato-icon-main.png"} imgClassName='h-35 rounded-4xl' name="zomato"
                    description="Get the app now to start ordering your favourite dishes" website="https://www.zomato.com/hyderabad/restaurants"
                />
                <ExternalIcons className="text-center w-60 border-3 border-orange-200/60 bg-gradient-to-bl from-orange-200/60 to-orange-100 p-7 pl-5 pr-5 rounded-4xl flex flex-col items-center justify-center align-middle gap-2"
                    imgUrl={"/assets/Blinkit-icon.svg"} imgClassName='h-35' name="blinkit"
                    description="Choose from 10,000+ producs & get them delivered in minutes" website="https://blinkit.com/"
                />
                <ExternalIcons className="text-center w-60 border-3 border-violet-200 bg-gradient-to-bl from-violet-300/60 to-voilet-100 p-7 pl-5 pr-5 rounded-4xl flex flex-col items-center justify-center align-middle gap-2"
                    imgUrl={"/assets/district-icon.png"} imgClassName='h-35' name="district"
                    description="The best of events, movies, dining, and everything you love!" website="https://www.district.in/"
                />
                <ExternalIcons className="text-center w-60 border-3 border-pink-200 bg-gradient-to-bl from-pink-200 to-pink-100 p-7 pl-5 pr-5 rounded-4xl flex flex-col items-center justify-center align-middle gap-2"
                    imgUrl={"/assets/hyperpure.png"} imgClassName='h-35 rounded-4xl' name="hyperpure"
                    description="Offering complete supply chain solution for your restaurant" website="https://www.hyperpure.com/"
                />
            </div>
        </div>
    )
}
export default EternalSection