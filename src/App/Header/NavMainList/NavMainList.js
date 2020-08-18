import React from "react"
import "./NavMainList.css"



const NavMainList = () => {
    return (
        <div className="col col-xs-6 nav-main ">
            <ul className="row nav-main__list">
                <li className="nav__item"><a href="#">fitness</a></li>
                <li className="nav__item"><a href="#">mental strenth</a></li>
                <li className="nav__item"><a href="#">health</a></li>
                <li className="nav__item"><a href="#">nutrition</a></li>
                <li className="nav__item"><a href="#">workouts</a></li>


            </ul>
        </div>
    )
}
export default NavMainList