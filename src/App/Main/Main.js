import React from "react"
import "./Main.css"
import Cover from "./cover/Cover.js"


const Main = () => {
    return (
        <>
            <Cover 
                image={
                    "images/photo/1.jpg"
                }
                title={
                    <a href="#">Maro Itoje's Trainer Shares the Rugby Player's Explosive Strength Workout</a>
                }
                subtitle={
                    <span>This is the workout the thinking man’ s battering ram uses to build strength</span>
                }
            />
            <Cover
                image={
                    "images/photo/2.jpg"
                }
                title={
                    <a href="#">dss</a>
                }
                subtitle={
                    <span>dddddddddd</span>
                }
            />
            <Cover
                image={
                    "images/photo/3.jpg"
                }
                title={
                    <a href="#">dss</a>
                }
                subtitle={
                    <span>dddddddddd</span>
                }
            />
            <Cover
                image={
                    "images/photo/1.jpg"
                }
                title={
                    <a href="#">dss</a>
                }
                subtitle={
                    <span>dddddddddd</span>
                }
            />
        </>
    )
}
export default Main