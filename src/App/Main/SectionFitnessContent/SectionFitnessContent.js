import React from "react"
import ArticlesData from "../articles/ArticlesData";
import SectionFitnessContentItem from "./SectionFitnessContentItem";


const SectionFitnessContent = () => {
    return (
        <div className="col col-xs-12 col-sm-6  col-md-4">
            {
                ArticlesData.slice(2,4).map(({
                    id,
                    title,
                    subtitle,
                    image
                }) => (
                        <SectionFitnessContentItem
                            key={id}
                            title={title}
                            subtitle={subtitle}
                            image={image}
                        />
                ))
            }
        </div>
    )
}



export default SectionFitnessContent;