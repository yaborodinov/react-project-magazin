import React from "react"
import Logo from "./Logo/Logo"
import NavMobileMenu from "./NavMobileMenu/NavMobileMenu"
import NavMenuList from "./NavMainList/NavMainList"
import NavMenuAside from "./NavMenuAside/NavMenuAside"
import Search from "./Search/Search"

import "./Header.css"


const Header = ()=> {
    return (
        <>
            <div className="header">
                <div className="container">
                     <div className="row header__row">
                        <NavMobileMenu/> 
                        <Logo />
                        <NavMenuList />
                        <NavMenuAside />
                        <Search />

                    </div>
                </div>
            </div>
        </>
        
    )
}
export default Header