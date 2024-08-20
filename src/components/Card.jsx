import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';

const Card = ({data, trending, index, media_type}) => {
    const imageURL = useSelector(state => state.movieDbData.imageURL);
    const mediaType = data.media_type ?? media_type;

    return (

        <Link to={"/"+mediaType+"/"+data.id} className="w-full h-80 min-w-[230px] max-w-[230px] rounded block overflow-hidden relative hover:scale-105 transition-all">
            {
                data?.poster_path 
                ? (<img src={imageURL+data?.poster_path} />) 
                : (<div className="bg-neutral-800 h-full w-full flex justify-center items-center">No Image Found</div>)
            }
            <div className="absolute top-3">
                {
                    trending && (
                        <div className="py-1 px-4 bg-black/30 backdrop-blur-3xl rounded-r-full overflow-hidden">
                            #{index} Trending
                        </div>
                    )
                }
            </div>

            <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/30 p-2">
                <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
                    {data?.title || data?.name}
                </h2>
                <div className="text-sm text-neutral-400 flex items-center justify-between">
                    <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
                    <p className="bg-black/40 px-1 rounded-l-full text-xs px-1 text-white">Rating: {Number(data.vote_average).toFixed(1)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;