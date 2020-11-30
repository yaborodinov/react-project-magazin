import React from "react"
import "./Main.css"
import "./ContentBlocks/Content2x1/ArticleItem.css"
import "./ContentBlocks/Content1x1/SectionFitnessContent.css"
import { Component } from "react"
import EntertainmentData from "./articlesData/EntertainmentData"
import SectionContent2x1Type2 from "./ContentBlocks/Content2x1/SectionContent2x1Type2"
import FintessData from "./articlesData/FitnessData"
import SectionContent2x1 from "./ContentBlocks/Content2x1/SectionContent2x1"
import SectionContent1x1 from "./ContentBlocks/Content1x1/SectionContent1x1"
import HealthData from "./articlesData/HealthData"


class Main extends Component{
    state={}
    render() {
        return (
            <main className="main">
                <div className="container">
                    <section className="section row secton__article-row">
                        <div className="col" >
                            {

                                HealthData.slice(0, 1).map(({
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
                    </section>
                    
                    <section className="section section__fitness">
                        <div className="row block_header ">
                            <h2 className="section_title col col-xs-8 col-sm-6 col-md-4 ">Fitness</h2>
                            <div className="block_header__line col col-xs-4 col-sm-6 col-md-8 "></div>

                        </div>

                        <div className="row section__fitness__content">

                            {
                                FintessData.slice(1, 7).map(({
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

                        </div>

                        <div className="row secton__article-row">
                            <div className="col" >
                                {

                                    FintessData.slice(0, 1).map(({
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
                        </div>
                            
                    </section>

                    <section className="section section__entertainment">
                        <div className="row block_header ">
                            <h2 className="section_title  col-xs-12 col-sm-12 col-md-8 ">entertainment</h2>
                            <div className="block_header__line    col-md-4 "></div>

                        </div>

                        <div className="row secton__article-row">


                            <div className="col ">
                                {
                                    EntertainmentData.slice(0, 1).map(({
                                        id,
                                        title,
                                        subtitle,
                                        image,
                                        author
                                    }) => (
                                            <SectionContent2x1Type2
                                                key={id}
                                                title={title}
                                                subtitle={subtitle}
                                                image={image}
                                                author={author}
                                            />
                                        ))
                                }
                            </div>


                        </div>

                        <div className="row section__fitness__content">

                            {
                                EntertainmentData.slice(1, 4).map(({
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

                        </div>



                    </section>

                    <section className="section section_food&diet">
                        <div className="row block_header ">
                            <h2 className="section_title  col-xs-12 col-sm-12 col-md-8 ">Food & Diet</h2>
                            <div className="block_header__line    col-md-4 "></div>

                        </div>


                        
                        <div className="row section__fitness__content">

                            {
                                EntertainmentData.slice(4, 7).map(({
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

                        </div>



                    </section>

                </div>
                
                
                
        </main>
    )
    }
}



export default Main