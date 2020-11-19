import React from "react"
import "./ArticleItem.css"

import ArticlesData from "../../articles/ArticlesData"
import SectionContent2x1 from "./SectionContent2x1"




const MainContent2x1 = () => {
    
    return (
        
            <div className="col" >
                {

                ArticlesData.slice(1,2).map(({
                        id,
                        title,
                        subtitle,
                        image
                    }) => (

                        <SectionContent2x1
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

export default MainContent2x1