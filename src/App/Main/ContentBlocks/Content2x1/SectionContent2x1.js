import React, {Component} from "react"




class SectionContent2x1 extends Component{
    state={}
    render() {
        const {
            title,
            subtitle,
            image

        } = this.props
        return (
            <div className="section__article-item">
                <img className="section__article-img" src={image} alt="" />
                <div className="section__article-title-block">
                    <h1 className="section__article-title">{title}</h1>
                    <h2 className="section__article-subtitle">{subtitle}</h2>
                </div>
                
            </div>
        )
    

    }
}


export default SectionContent2x1
