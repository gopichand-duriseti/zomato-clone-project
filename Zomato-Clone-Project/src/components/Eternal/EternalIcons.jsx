const ExternalIcons = ({ className, imgUrl, imgClassName, name, description,website }) => {
    const link = "Check it out  ▹"
    return (
        <a href={website} target="_blank">
            <div className={`transition-all duration-300 ease-out hover:scale-110 ${className}`}>
                {/* 
                    transform transition-transform duration-300 ease-in-out
                    transform → enables GPU-optimized transforms
                    transition-transform → animates only transform changes
                    duration-300 → 300ms smooth animation
                    ease-in-out → natural acceleration & deceleration
                    hover:scale-125 → scale on hover */}
                <img src={imgUrl} alt="" className={`${imgClassName}`} />
                <span className="font-semibold text-2xl">{name}</span>
                <span className="text-l text-gray-600 font-extralight">{description}</span>
                <pre className="font-sans font-extralight">{link}</pre>
            </div>
        </a>
    )
}
export default ExternalIcons