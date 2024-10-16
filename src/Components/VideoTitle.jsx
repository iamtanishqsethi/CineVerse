const VideoTitle=({title,overview})=>{

    return (
        <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="bg-gray-100 font-bold text-lg text-black py-1 md:py-2 px-4 md:px-10 m-4 md:m-2 rounded hover:bg-opacity-80">  Play</button>
                <button className="
                hidden md:inline-block
                bg-gray-800 bg-opacity-40 text-white py-2 px-10 m-2 rounded hover:bg-opacity-80">  More info</button>
            </div>
        </div>
    )
}
export default VideoTitle;