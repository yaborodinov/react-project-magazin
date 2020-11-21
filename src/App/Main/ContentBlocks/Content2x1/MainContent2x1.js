import React from "react"
import "./ArticleItem.css"

import SectionContent2x1 from "./SectionContent2x1"
import HealthData from "../../articlesData/HealthData"




const MainContent2x1 = () => {
    
    return (
        
            <div className="col" >
                {

                HealthData.slice(0,1).map(({
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