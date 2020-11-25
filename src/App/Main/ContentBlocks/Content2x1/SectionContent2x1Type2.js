import React, { Component } from "react"




class SectionContent2x1Type2 extends Component {
    state = {}
    render() {
        const {
            title,
            subtitle,
            image,
        } = this.props
        return (
            <div className="section__article-item row section__article-item-type2">

                <div className="col col-xs-12 col-md-6">
                    <h1 className="section__article-title">{title}</h1>
                    <h2 className="section__article-subtitle">{subtitle}</h2>
                </div>


                <div className="col col-xs-12 col-md-6">
                    <img className="section__article-img" src={image} alt="" />
                </div>
            </div>
        )


    }
}


export default SectionContent2x1Type2;
