import React from "react"
import "./Main.css"
import { Component } from "react"
import ArticleList from "./articles/ArticleList.js"


class Main extends Component{
    state={}
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="section">
                        <div className="secton__article-row">
                            <ArticleList />
                        </div>
                    </div>
                    
                </div>
        </main>
    )
    }
}



export default Main