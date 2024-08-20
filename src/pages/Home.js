import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const trendingData = useSelector(state => state.movieDbData.bannerData);
    const { data: nowPlayingData } = useFetch("/movie/now_playing");
    const { data: topRatedData } = useFetch("/movie/top_rated");
    const { data: popularTvData } = useFetch("/tv/popular");
    const { data: onAirTvData } = useFetch("/tv/on_the_air");

    return (
        <div>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />
            <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
            <HorizontalScrollCard data={topRatedData} heading={"Top Rated"} media_type={"movie"} />
            <HorizontalScrollCard data={popularTvData} heading={"Popular TV Show"} media_type={"tv"} />
            <HorizontalScrollCard data={onAirTvData} heading={"On Air TV Show"} media_type={"tv"} />
        </div>
    )
}

export default Home;