import React, {Component} from "react"




class ArticleListItem extends Component{
    state={}
    render() {
        const {
            title,
            text,
            image

        } = this.props
        return (
            <>
                <img className="section__article-img" src={image} alt="" />
                <div className="section__article-title-block">
                    <h1 className="section__article-title">{title}</h1>
                    <h2 className="section__article-subtitle">{text}</h2>
                </div>
                
            </>
        )
    

    }
}


export default ArticleListItem