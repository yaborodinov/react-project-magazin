import React from "react"
import "./Main.css"
import { Component } from "react"
import FitnessContent1x1 from "./ContentBlocks/Content1x1/FitnessContent1x1"
import MainContent2x1 from "./ContentBlocks/Content2x1/MainContent2x1.js"
import FitnessContent2x1 from "./ContentBlocks/Content2x1/FitnessContent2x1"


class Main extends Component{
    state={}
    render() {
        return (
            <main className="main">
                <div className="container">
                    <section className="section row secton__article-row">
                        <MainContent2x1/>
                    </section>
                    
                    <section className="section section__fitness ">
                        <div className="row block_header ">
                            <h2 className="section_title col col-xs-8 col-sm-6 col-md-4 ">Fitness</h2>
                            <div className="block_header__line col col-xs-4 col-sm-6 col-md-8 "></div>

                        </div>

                        <div className="row section__fitness__content">
                            <FitnessContent1x1/>
                        </div>

                        <div className="row secton__article-row">
                            <FitnessContent2x1/>
                        </div>
                            
                    </section>
                </div>
                
                
                
        </main>
    )
    }
}



export default Main