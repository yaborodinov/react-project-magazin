import React from "react"
import "./SectionFitnessContent.css"

import SectionContent1x1 from "./SectionContent1x1";
import FintessData from "../../articlesData/FitnessData";


const FitnessContent1x1 = () => {
    return (
        <>
            {
                FintessData.slice(1,7).map(({
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