import React from "react"
import Logo from "./Logo/Logo"
import NavMobileMenu from "./NavMobileMenu/NavMobileMenu"
import NavMenuList from "./NavMainList/NavMainList"
import NavMenuAside from "./NavMenuAside/NavMenuAside"

import "./Header.css"


const Header = ()=> {
    return (
        <header className="header">
            <div className="container">
                
                <div className="row header__row">
                    <NavMobileMenu/> 
                    <Logo />
                    <NavMenuList />
                    <NavMenuAside/>

                </div>
            </div>
        </header>
    )
}
export default Header