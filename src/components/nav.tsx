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
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" 
                    />
                </svg>
                <h1>Movie App</h1>
            </div>

            <ul className="flex gap-5">
                 <li><NavLink to={"/"}>Acceuil</NavLink></li>
                 <li><NavLink to={"/movies"}>Film</NavLink></li>
                 <li><NavLink to={"/about"}>A propos</NavLink></li>
            </ul>
        </nav>
    )
}