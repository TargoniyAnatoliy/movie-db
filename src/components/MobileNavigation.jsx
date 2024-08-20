import React from "react";
import { mobileNavigation } from "./constants/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
    return (
        <section className="lg:hidden h-14 bg-neutral-800 bg-opacity-75 z-40 backdrop-blur-2xl fixed bottom-0 w-full">
            <div className="flex items-center justify-between h-full text-neutral-400">
                {
                    mobileNavigation.map((nav, index) => {
                        return (
                            <NavLink 
                                key={nav.label + 'mobilenavigation'+index}
                                to={nav.href}
                                className={({isActive}) => `px-3 flex flex-col items-center justify-center h-full ${isActive && "text-amber-400"}`}
                            >
                                <div className="text-2xl">
                                    {nav.icon}
                                </div>                                
                                <p className="text-sm">{nav.label}</p>
                            </NavLink>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MobileNavigation;