import { APP_STORE_URL, PLAY_STORE_URL } from "../../utils/app.constants"

const DownloadLinks = () => {
    return (
        <>
            <a target='blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true">
                <img src={PLAY_STORE_URL} alt="play-store-image" className="w-40 h-full transition-transform duration-100 ease-in hover:scale-110" />
            </a>
            <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" target='_blank'>
                <img src={APP_STORE_URL} alt="app-store-image" className="w-40 transition-transform duration-100 ease-in hover:scale-110" />
            </a>
        </>
    )
}
export default DownloadLinks