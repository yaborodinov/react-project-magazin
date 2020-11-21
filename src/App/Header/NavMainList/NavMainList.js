import React from "react"
import "./NavMainList.css"



const NavMainList = () => {
    return (
        <div className="col  nav-main ">
            <ul className="row nav-main__list">
                <li className="nav__item"><span>fitness</span></li>
                <li className="nav__item"><span>mental strenth</span></li>
                <li className="nav__item"><span>health</span></li>
                <li className="nav__item"><span>nutrition</span></li>
                <li className="nav__item"><span>workouts</span></li>


            </ul>
        </div>
    )
}
export default NavMainList