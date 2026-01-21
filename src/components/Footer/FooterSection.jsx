import FooterSocialMediaLinks from "./FooterSocialMediaLinks"
import footerMenu from '../../data/footerMenu.json'
import FooterMenu from "./FooterMenu"
import DownloadLinks from "../Download/DownloadLinks"

// <img src="/assets/zomato_icon.png" alt="" className="w-40"/>
const FooterSection = () => {
    return (
        <>
            <div className="bg-black text-white pl-50 pr-50 pt-30 pb-30 flex flex-col mt-20 gap-5 ">
                <img src="/assets/zomato.png" alt="zomato-icon" className='w-40' />
                <div className="flex mt-5 text-gray-500 justify-between">
                    <div className=" flex flex-col gap-2 ">
                        <span className="text-white">Eternal</span>
                        {/* className="[&>span]:hover:text-red-500 [&>span]:cursor-pointer" */}
                        <FooterMenu heading={footerMenu.Eternal} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white mb-1">For Restaurants</span>
                        <FooterMenu heading={footerMenu["For Restaurants"]} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white mb-1">For Delivery <br /> Partners</span>
                        <FooterMenu heading={footerMenu["For Delivery Partners"]} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white mb-1">Learn More</span>
                        <FooterMenu heading={footerMenu["Learn More"]} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white">Social links</span>
                        <div className="flex gap-1">
                            {<FooterSocialMediaLinks appName={"fa-linkedin"} appLink={"https://www.linkedin.com/company/zomato/?originalSubdomain=in"} />}
                            {<FooterSocialMediaLinks appName={"fa-instagram"} appLink={"https://www.instagram.com/zomato/"} />}
                            {<FooterSocialMediaLinks appName={"fa-youtube"} appLink={"https://www.youtube.com/zomato"} />}
                            {<FooterSocialMediaLinks appName={"fa-facebook"} appLink={"https://www.facebook.com/zomato"} />}
                            {<FooterSocialMediaLinks appName={"fa-twitter"} appLink={"https://x.com/zomato"} />}
                        </div>
                        <DownloadLinks />
                    </div>
                </div>

                <div className="border-t border-white/20 mt-20"></div>
                <div className="text-white/60 text-[10px]">
                    By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                    2008-2026 © Zomato™ Ltd. All rights reserved.
                </div>
            </div>

        </>
    )
}
export default FooterSection