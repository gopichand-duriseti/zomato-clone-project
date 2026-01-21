import { PHONE_IMG_URL,QR_CODE_IMG_URL } from "../../utils/app.constants"
import DownloadLinks from "./DownloadLinks"

const DownloadSection = () => {
    return (
        <div className="flex gap-20 mt-20 border-7 border-chablis rounded-4xl p-20 ml-[5%] mr-[5%] justify-around pb-0">
            <div className="flex flex-col items-start justify-center">
                <span className="text-4xl font-extrabold mb-1">Download the app now</span>
                <span className="mb-3">Experience seamless online ordering <br /> only on the Zomato app</span>
                <div className="flex flex-row gap-2">
                    <DownloadLinks />
                </div>
            </div>
            <div className="relative">
                <img src={PHONE_IMG_URL} alt="phone-image" className="w-[25rem] ml-10" />
                <div>
                    <span className="absolute top-30 left-40 text-gray-700 font-bold">Scan the QR code to <br /> download the app</span>
                    <img className="absolute top-45 left-33 w-[50%] h-[50%]" src={QR_CODE_IMG_URL} alt="QR-code-image" />
                </div>
            </div>
        </div>
    )
}
export default DownloadSection