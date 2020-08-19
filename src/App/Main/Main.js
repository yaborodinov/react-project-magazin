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
                    "images/photo/4.jpg"
                }
                title={
                    <a href="#">Keto or Paleo: Which Diet is Better for Fat-Loss?</a>
                }
                subtitle={
                    <span>Both are espoused by influencers and experts alike, but only one is man’s best trend for burning fat</span>
                }
            />
            <Cover
                image={
                    "images/photo/5.jpg"
                }
                title={
                    <a href="#">9 Professional Athletes Share The Workout and Fitness Tips That Got Them to the Top</a>
                }
                subtitle={
                    <span>Yes, the "Fittest Man on Earth" still does bodyweight workouts</span>
                }
            />
            <Cover
                image={
                    "images/photo/6.jpg"
                }
                title={
                    <a href="#">Want Bigger Arms? Try This 4-Move Workout That Also Hits Your Chest and Abs</a>
                }
                subtitle={
                    <span>Using a smart combination of size-building principles and lung-searing protocols, this workout will pack-out your T-shirt. Fast</span>
                }
            />
        </>
    )
}
export default Main