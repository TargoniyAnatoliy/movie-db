import React, { useEffect, useState } from "react";
import logo from "../assets/icons8-play-button-50.png";
import userIcon from "../assets/icons8-user-48.png";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navigation } from "./constants/navigation";


const Header = () => {

    
    const location = useLocation();
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
    const [searchInput, setSearchInput] = useState(removeSpace);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
        
    }, [searchInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="fixed top-0 w-full h-16 bg-neutral-800 bg-opacity-75 z-40">
            <div className="container mx-auto px-4 flex items-center h-full">
                <Link to={'/'} className="logo flex items-center gap-1 ml-2">
                    <img src={logo} alt='logo' /> <span className="text-xl font-bold text-amber-400">MovieDB</span>
                </Link>
                <nav className="hidden lg:flex items-center gap-2 ml-5">
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div key={"header"+index}>
                                    <NavLink 
                                        key={nav.label} to={nav.href} 
                                        className={({isActive}) => `px-2 hover:text-amber-300 ${isActive && "text-amber-300"}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className="ml-auto flex items-center gap-5">
                    <form className="flex items-center gap-5 onSubmit={handleSubmit}">
                        <input 
                            type="text" placeholder="Search here..." 
                            className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                            />
                        <button className="text-2xl text-white">
                            <IoSearchOutline />
                        </button>
                    </form>
                    
                    <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                        <img src={userIcon} width="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;