import { APP_STORE_URL, PLAY_STORE_URL, VIDEO_URL } from '../utils/app.constants'

const HeroSection = () => {
    const handleScrollDown = () => {
        const nextSection = document.getElementById('order-section')
        nextSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="w-screen h-screen relative">
            <video
                className="absolute inset-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                playsInline
                muted
                src={VIDEO_URL}
            />

            {/* SHADOW SECTION */}
            <div className="z-0 absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                <div className="relative z-10 flex flex-col items-center justify-center h-full pt-40">
                    
                    <img src="/assets/zomato.png" alt="zomato-icon" className="w-52" />

                    <div className="mb-5 px-5 text-center font-semibold text-5xl text-white mt-8">
                        India's #1 <br />
                        <span className="mt-2">food delivery app</span>
                    </div>

                    <span className="text-white text-2xl px-5 text-center font-medium">
                        Experience fast and easy online ordering <br /> on Zomato app
                    </span>

                    <div className="flex gap-6 mt-10">
                        <a
                            target="_blank"
                            href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN"
                        >
                            <img
                                src={PLAY_STORE_URL}
                                alt="play_store_icon"
                                className="w-50 transition-transform duration-150 ease-in hover:scale-110"
                            />
                        </a>

                        <a
                            href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
                            target="_blank"
                        >
                            <img
                                src={APP_STORE_URL}
                                alt="app_store_icon"
                                className="w-44 transition-transform duration-150 ease-in hover:scale-110"
                            />
                        </a>
                    </div>

                    {/* SCROLL DOWN */}
                    <div
                        className="flex items-center justify-center gap-3 mt-8 animate-bounce cursor-pointer"
                        onClick={handleScrollDown}
                    >
                        <span className="text-white font-medium">Scroll down</span>
                        <img src="/assets/double-arrow.svg" alt="double-arrow-icon" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection
