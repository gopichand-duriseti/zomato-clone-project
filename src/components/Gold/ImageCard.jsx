const ImageCard=({imgUrl,title,secondaryTitle})=>{
    return(
        <div className="flex items-center justify-center gap-5">
            <img src={imgUrl} alt={title} className="w-[4.6rem] " />
            <div className="flex flex-col">
                <span className="text-2xl text-extrabold">{title}</span>
                <span className="font-xl font-semibold mt-1 bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent ">{secondaryTitle}</span>
            </div>
        </div>
    )
}
export default ImageCard