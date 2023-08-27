import React , { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [showNavBar, setShowNavBar] = useState(false);
const showNavbar = () => {
    if(showNavBar){
        setShowNavBar(false)
    }else{
        setShowNavBar(true)
    }
}

    return (
        <header className="page-header ">
            <div className="d-block d-xl-none d-lg-none d-md-none ">
                <nav className={"navigation-sm showNav-"  + showNavBar }>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={showNavbar}>
                                Startseite
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favoriten" onClick={showNavbar}>
                                Favoriten
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/impressum" onClick={showNavbar}>
                                Impressum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/kontakt" onClick={showNavbar}>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar} >
                    <FaBars />
                </button>
            </div>

            <div className="row">
                <div className="header-left col col-xl-4 col-lg-4 col-md-4 d-none d-xl-grid d-lg-grid d-md-grid align-items-center justify-content-start">
                    <nav className="navigation navbar-expand-sm ">
                        <ul className="d-flex align-items-center">
                            <li>
                                <NavLink to="/">
                                    Startseite
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/favoriten">
                                    Favoriten
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-center col col-xl-4 col-lg-4 col-md-4 col-12 d-inline">
                    <NavLink to="/">
                        <object className="logo" width="120" height="120"
                            data="https://i.pinimg.com/564x/d0/36/e9/d036e9782a73a5d73a74b89c3d9d0da0.jpg"></object>
                    </NavLink>
                </div>
                <div className="header-right col col-xl-4 col-lg-4 col-md-4 col-12 d-none d-xl-grid d-lg-grid d-md-grid align-items-center">
                    <nav className="navigation navbar-expand-sm">
                        <ul className="d-flex">
                            <li>
                                <NavLink to="/impressum">
                                    Impressum
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontakt">
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>

        </header>
    );
}

export default Header;