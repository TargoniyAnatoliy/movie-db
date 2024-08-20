import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HorizontalScrollCard = ({data, heading, trending}) => {

    const containerRef = useRef();

    const handlePrev = () => {
        containerRef.current.scrollLeft -= 300;
    };

    const handleNext = () => {
        containerRef.current.scrollLeft += 300;
    };

    return (
        <div className="container mx-auto px-3 my-10">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">{heading}</h2>
            <div className="relative">
                <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all scrollbar-none">
                    {
                        data.map((data, index, media_type) => {
                            return (
                                <Card key={data.id+"heading"+index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                            )
                        })
                    }
                </div>

                <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between px-4">
                    <button onClick={handlePrev} className="bg-white p-1 text-black rounded-full -ml-2 z-10">
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext} className="bg-white p-1 text-black rounded-full -mr-2 z-10">
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScrollCard;
