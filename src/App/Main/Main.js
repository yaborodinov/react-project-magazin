import React from "react"
import "./Main.css"
import { Component } from "react"
import ArticleList from "./articles/ArticleList.js"
import SectionFitnessContent from "./SectionFitnessContent/SectionFitnessContent"


class Main extends Component{
    state={}
    render() {
        return (
            <main className="main">
                <div className="container">
                    <section className="section row secton__article-row">
                            <ArticleList />
                    </section>
                    
                    <section className="section section__fitness ">
                        <div className="row block_header ">
                            <h2 className="section_title col col-xs-8 col-sm-6 col-md-4 ">Fitness</h2>
                            <div className="block_header__line col col-xs-4 col-sm-6 col-md-8 "></div>

                        </div>

                        <div className="row section__fitness__content">
                            
                            <SectionFitnessContent/>
                        </div>
                            
                    </section>
                </div>
                
                
                
        </main>
    )
    }
}



export default Main