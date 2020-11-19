import React from "react"
import "./SectionFitnessContent.css"

import ArticlesData from "../../articles/ArticlesData";
import SectionContent1x1 from "./SectionContent1x1";


const FitnessContent1x1 = () => {
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
                        <SectionContent1x1
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



export default FitnessContent1x1;