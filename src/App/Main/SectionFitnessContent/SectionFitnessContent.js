import React from "react"
import "./SectionFitnessContent.css"
import ArticlesData from "../articles/ArticlesData";
import SectionFitnessContentItem from "./SectionFitnessContentItem";


const SectionFitnessContent = () => {
    return (
        <>
            {
                ArticlesData.slice(0,6).map(({
                    id,
                    title,
                    subtitle,
                    image,
                    author
                }) => (
                        <SectionFitnessContentItem
                            key={id}
                            title={title}
                            subtitle={subtitle}
                            image={image}
                            author={author}
                        />
                ))
            }
        </>
    )
}



export default SectionFitnessContent;