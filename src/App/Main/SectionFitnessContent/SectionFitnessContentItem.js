import React from "react"




const SectionFitnessContentItem = ({
    title,
    subtitle,
    image,
    author
}) => {
    return (
        <div className="col col-xs-12 col-sm-6  col-md-4 ContentItem_1x1">
            <div className="ContentItem_1x1__image-wrapper"><img className="ContentItem_1x1__image" src={image} alt="strenth"/></div>
            <h2 className="ContentItem_1x1__title">{title}</h2>
            <h3 className="ContentItem_1x1__subtitle">{subtitle}</h3>
            <p className="ContentItem_1x1__author">{author}</p>

            


        </div>
    )
}
export default SectionFitnessContentItem;