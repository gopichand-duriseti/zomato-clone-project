import { CALENDAR_IMG_URL, COLLECTIONS_IMG_URL, FOOD_ON_TRAIN_IMG_URL, GIFT_CARDS_IMG_URL, GOURMET_IMG_URL, HEALTHY_IMG_URL, OFFERS_IMG_URL, PARTY_IMG_URL, PHONE_IMG_URL, VEG_MODE_IMG_URL } from "../../utils/app.constants"
import FeatureCard from "./FeatureCard"
import { motion as Motion } from "framer-motion";

const FeaturesSection = () => {

    return (
        <div className="h-[30rem] bg-gradient-to-b from-chablis to-white">
            =
            <div className="relative text-center flex flex-col items-center justify-center py-28">
                <span className="text-carnation text-[48px] font-black leading-tight" >What's waiting for you <br /> on the app?</span>
                <span className="text-xl text-comet font-extralight mt-5">Our app is packed with features that <br /> enable you to experience food <br /> delivery like never before</span>
                <Motion.div className="relative"
                initial={{y:160,opacity:0}}
                whileInView={{x:0,y:0,opacity:1}}
                viewport={{ amount:0.1, once:true}}
                transition={{duration:0.4,ease:"easeIn" }}
                >
                
                    <img src={PHONE_IMG_URL} alt="phone-image" className="w-[18rem] mt-6"
                        
                    />
                    <div className="py-3.5 pb-2 absolute top-[8.5rem] left-[4.5rem] shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border-athens-gray">
                        <img src={CALENDAR_IMG_URL} alt="calender-image" className="w-[144px] h-[90px]" />
                        <span>Shedule <br /> your order</span>
                    </div>
                </Motion.div>
                <FeatureCard imgUrl={VEG_MODE_IMG_URL} title="Veg Mode" className='bottom-[17rem] left-[22.5rem]' />
                <FeatureCard imgUrl={HEALTHY_IMG_URL} title="Healthy" className='bottom-[16rem] left-[14rem]' />
                <FeatureCard imgUrl={PARTY_IMG_URL} title="Plan a Party" className='bottom-[7rem] left-[16rem]' />
                <FeatureCard imgUrl={GIFT_CARDS_IMG_URL} title="Gift Cards" className='bottom-[8rem] left-[24.5rem]' />
                <FeatureCard imgUrl={GOURMET_IMG_URL} title="Gourmet" className='bottom-[16rem] right-[23.5rem]' />
                <FeatureCard imgUrl={FOOD_ON_TRAIN_IMG_URL} title="Food on Train" className='bottom-[7rem] right-[21.5rem]' />
                <FeatureCard imgUrl={OFFERS_IMG_URL} title="Offers" className='bottom-[17rem] right-[15rem]' />
                <FeatureCard imgUrl={COLLECTIONS_IMG_URL} title="Collections" className='bottom-[8rem] right-[13rem]' />
            </div>

        </div>
    )
}
export default FeaturesSection