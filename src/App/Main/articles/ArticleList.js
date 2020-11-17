import React from "react"
import "./ArticleItem.css"

import ArticlesData from "./ArticlesData"
import ArticleListItem from "./ArticlesListItem"



const ArticleList = () => {
    
    return (
        
            <div className="col" >
                {

                ArticlesData.slice(0, 1).map(({
                        id,
                        title,
                        subtitle,
                        image
                    }) => (

                        <ArticleListItem
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

export default ArticleList