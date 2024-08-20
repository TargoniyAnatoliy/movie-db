import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BannerHome = () => {

    const bannerData = useSelector(state => state.movieDbData.bannerData);
    const imageURL = useSelector(state => state.movieDbData.imageURL);

    let [currentImage, setCurrentImage] = useState(0);

    const prevImageHandle = () => {
        if(currentImage > 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    const nextImageHandle = () => {
        if(currentImage < bannerData.length - 1) {
            setCurrentImage(prev => prev + 1);
        }
    };

    useEffect(() => {
        let interval = setInterval(() => {
            if(currentImage < bannerData.length - 1) {
                setCurrentImage(currentImage = currentImage + 1);
            } else {
                setCurrentImage( currentImage = 0);
            }
        }, 5000)
        return () => clearInterval(interval);
    }, [bannerData,imageURL]);

    return (
        <section className="w-full h-full">
            <div className="flex min-h-full max-h-[95vh] overflow-hidden">
                {
                    bannerData.map((data, index) => {
                        return (
                            <div
                                key={data.id+"bannerHome"}
                                className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all" 
                                style={{transform: `translateX(-${currentImage * 100}%)`}}
                            >
                                <div className="w-full h-full">
                                    <img
                                        src={imageURL + data.backdrop_path}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="absolute top-0 w-full h-full hidden group-hover:lg:flex items-center justify-between px-4">
                                    <button onClick={prevImageHandle} className="hover:text-white z-10 text-2xl lg:text-4xl hover:scale-105">
                                        <FaAngleLeft/>
                                    </button>
                                    <button onClick={nextImageHandle} className="hover:text-white z-10 text-2xl lg:text-4xl hover:scale-105">
                                        <FaAngleRight/>
                                    </button>
                                </div>

                                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent">
                                </div>
                                <div className="container mx-auto">
                                    <div className="w-full absolute bottom-0 max-w-md px-3">
                                        <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{data?.title || data?.name}</h2>
                                        <p className="text-ellipsis line-clamp-3 my-2">{data.overview}</p>
                                        <div className="flex items-center gap-4">
                                            <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                                            <span>|</span>
                                            <p>Views: {Number(data.popularity).toFixed(0)}</p>
                                        </div>
                                        <button 
                                            className="bg-white px-4 py-2 text-black font-bold rounded mt-4
                                                hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105"
                                        >
                                            Play now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BannerHome;