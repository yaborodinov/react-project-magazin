import React, { Component } from "react"




class SectionContent2x1Type2 extends Component {
    state = {}
    render() {
        const {
            title,
            subtitle,
            image,
            author
        } = this.props
        return (
            <div className="section__article-item row section__article-item-type2">

                <div className="col col-xs-12 col-md-6 title-block-type2">
                    <h1 className="section__article-title ">{title}</h1>
                    <h2 className="section__article-subtitle">{subtitle}</h2>
                    <p className="ContentItem_1x1__author author-type2">{author}</p>
                </div>


                <div className=" col-xs-12 col-md-6">
                    <img className="section__article-img img-type2" src={image} alt="" />
                </div>
            </div>
        )


    }
}


export default SectionContent2x1Type2;
