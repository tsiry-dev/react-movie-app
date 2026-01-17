import { useState, useEffect } from "react";
import "./nav.scss";
import { NavLink } from "react-router";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
            <div className="nav-brand">
                <svg 
                    className="nav-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                </svg>
                <h1>Gallery App</h1>
            </div>

            <ul className="flex gap-5">
                 <li><NavLink to={"/"}>Acceuil</NavLink></li>
                 <li><NavLink to={"/about"}>A propos</NavLink></li>
            </ul>
        </nav>
    )
}