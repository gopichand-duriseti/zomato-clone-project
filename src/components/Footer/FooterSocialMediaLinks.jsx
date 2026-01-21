const FooterSocialMediaLinks = ({appName,appLink}) => {
    return (
        <a href={appLink} target="blank">
            <span
                className={`fa-brands ${appName}  w-4 h-4 flex items-center justify-center  bg-white rounded-full`}>
            </span>
        </a>
    )
}
export default FooterSocialMediaLinks