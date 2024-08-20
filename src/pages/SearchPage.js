import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {

    const location = useLocation();
    const [searchData, setSearchData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/search/collection`, {
                params: {
                    query: location?.search?.slice(3),
                    page: 1
                }
            });

            setSearchData((prev) => {
                return [
                    ...prev,
                    ...response.data.results
                ]
            });

        } catch (error) {
            console.log('error: ', error);
        }
    };

    useEffect(() => {
        setPage(1);
        setSearchData([]);
        fetchData();
    }, [location?.search]);

    const handlePageScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div>
            <div className="container mx-auto">
                <h3 className="capitalize text-lg my-3 lg:text-xl font-semibold">Search results</h3>

                <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
                    {
                        searchData.map((searchData, index) => {
                            return (
                                <Card data={searchData} key={searchData.id+"search"} media_type={searchData.media_type} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage;