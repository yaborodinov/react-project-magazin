import React from "react"

import "./Header.css"


const Header = ()=> {
    return (
        <header className="header">
            <div className="container">
                <ul className="row nav">
                    <li className="col col-md-12 col-sm-4 nav__item"><a href="#">Home</a></li>
                    <li className="col col-md-12 col-sm-4 nav__item"><a href="#">About</a></li>
                    <li className="col col-md-12 col-sm-4 nav__item"><a href="#">Contacts</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Header