import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {

    const params = useParams();
    let [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    let [totalPageNumber, setTotalPageNumber] = useState(0);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/discover/${params.explore}`, {
                params: {
                    page: pageNumber
                }
            });

            setData((prev) => {
                return [
                    ...prev,
                    ...response.data.results
                ]
            });

            setTotalPageNumber( totalPageNumber = response.data.total_pages);

        } catch (error) {
            console.log('error: ', error);
        }
    };

    const handlePageScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPageNumber(prev => prev + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    useEffect(() => {
        setPageNumber(1);
        setData([]);
        fetchData();
    }, [params.explore]);

    useEffect(() => {
        window.addEventListener('scroll', handlePageScroll);
    }, []);

    return (
        <div className="py-16">
            <div className="container mx-auto">
                <h3 className="capitalize text-lg my-3 lg:text-xl font-semibold">Popular {params.explore} show</h3>

                <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
                    {
                        data.map((exploreData, index) => {
                            return (
                                <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;