import { BURGER_IMG_URL, CITIES_IMG_URL, LEAVES_IMG_URL, LEFT_SIDE_LINE, MOMOS_IMG_URL, ORDER_DELIVERED_IMG_URL, PIZZA_IMG_URL, RESTAURANT_IMG_URL, TOMATO_IMG_URL } from "../utils/app.constants"
import { motion as Motion } from "framer-motion";

const OrderSection = () => {
    return (

        <div className="h-[37rem] relative">
            <div className="absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%]">
                <img src={LEFT_SIDE_LINE} alt="left-side-line"
                    className="h-auto" />
            </div>
            <div>
                <Motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.25, once: true }}
                    variants={{
                        hidden: {},
                        visible: {}
                    }}>
                    <Motion.img src={BURGER_IMG_URL} alt="burger-image" className="w-[15rem] absolute left-52 top-10"
                        // initial={{ x: -360, y: 60, opacity: 0 }}
                        variants={{
                            hidden: { x: -160, y: 60, opacity: 1 },
                            visible: { x: 0, y: 0, opacity: 1 }

                        }}
                        // whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}

                    // viewport={{ amount: 0.25, once: false }}
                    // style={{
                    //     animation: "leftToTopRight 500ms ease-out forwards",
                    // }} 
                    />
                    <Motion.img src={MOMOS_IMG_URL} alt="momos-image" className="w-[15rem] h-[13rem] absolute right-52 -top-44"
                        variants={{
                            hidden: { x: 100, y: -50, opacity: 1 },
                            visible: { x: 0, y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                    />
                    <Motion.img src={PIZZA_IMG_URL} alt="pizza-image" className="w-[15rem] absolute right-36 top-40"
                        variants={{
                            hidden: { x: 100, y: 200, opacity: 1 },
                            visible: { x: 0, y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 1, ease: "easeIn" }}
                    />
                </Motion.div>



                <img src={TOMATO_IMG_URL} alt="tomato-image" className="w-12 absolute top-90 left-32" />
                <img src={TOMATO_IMG_URL} alt="tomato-image" className="w-12 absolute top-10 right-25 rotate-45" />
                <img src={LEAVES_IMG_URL} alt="leaves-image" className="absolute w-12 -top-30 left-[30%]" />
                <div className="w-[30%] text-center m-auto flex items-center justify-center flex-col mt-[14rem]">
                    <span className="text-carnation text-5xl font-bold leading-[3.5rem]">Better food for more people</span>
                    <span className="text-comet text-xl mt-8 w-[27rem]">For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep</span>
                </div>
                <div className="rounded-4xl bg-white shadow-2xl w-[55%] m-auto py-5 px-7 flex items-center  mt-[13rem]">
                    <div className="flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
                        {/*
                            flex-1 will help items to take equal space 
                            border-r:- border-right
                        */}
                        <div className="flex flex-col">
                            <span className=" text-comet text-3xl font-bold">3,00,000+</span>
                            <span className="text-raven text-lg">restaurents</span>
                        </div>
                        <img src={RESTAURANT_IMG_URL} alt="restaurent-image" className="w-16 h-14" />
                    </div>
                    <div className="flex items-center justify-center gap-3 flex-1 border-r border-gray-200 ">
                        {/* 
                            flex-1 will help items to take equal space 
                            border-r:- border-right
                        */}
                        <div className="flex flex-col">
                            <span className=" text-comet text-3xl font-bold">800+</span>
                            <span className="text-raven text-lg">cities</span>
                        </div>
                        <img src={CITIES_IMG_URL} alt="location-image" className="w-10 h-14" />
                    </div>
                    <div className="flex items-center justify-center gap-3 flex-1 pl-5">
                        {/* 
                            flex-1 will help items to take equal space 
                            border-r:- boborder-r border-gray-200 pr-5rder-right
                        */}
                        <div className="flex flex-col">
                            <span className=" text-comet text-3xl font-bold">3 billion+</span>
                            <span className="text-raven text-lg">orders delivered</span>
                        </div>
                        <img src={ORDER_DELIVERED_IMG_URL} alt="orders-image" className="w-16 h-14" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderSection