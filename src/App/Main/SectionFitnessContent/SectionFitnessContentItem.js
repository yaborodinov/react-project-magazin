import React from "react"




const SectionFitnessContentItem = ({
    title,
    subtitle,
    image,
}) => {
    return (
        <div>
            <img src={image} alt="strenth"/>
            <div>{title}</div>
            <div>{subtitle}</div>

            


        </div>
    )
}
export default SectionFitnessContentItem;