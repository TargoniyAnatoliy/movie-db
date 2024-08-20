import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center bg-neutral-800 bg-opacity-80 z-40">
            <div className="flex items-center justify-center gap-4">
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Contact</Link>
            </div>
            <p className="text-sm">Created By TargoniyAnatoliy</p>
        </footer>
    )
}

export default Footer;