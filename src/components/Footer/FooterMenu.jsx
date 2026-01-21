import FooterMenuLinks from '../../data/footerMenuLinks.json'

const FooterMenu = ({ heading }) => {
    return (
        <span className="flex flex-col gap-2 [&>span]:hover:text-gray-300 [&>span]:cursor-pointer">
            {heading.map((item, index) => {
                return (
                    <a href={FooterMenuLinks[item]} target='blank'>
                        <span key={index}>{item}</span>
                    </a>          
                )
            })
            }
        </span>
    )
}
export default FooterMenu