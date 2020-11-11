import React from "react"
import "./ArticleItem.css"

import ArticlesData from "./ArticlesData"
import ArticleListItem from "./ArticlesListItem"



const ArticleList = () => {
    return (
        
            
            <div className="col" >
                {
                    ArticlesData.map(({
                        title,
                        text,
                        image
                    }) => (
                        
                            <ArticleListItem
                                    title={title}
                                    text={text}
                                    image={image}
                            />
                        
                    ))

                }
            </div>
        
    )
}

export default ArticleList