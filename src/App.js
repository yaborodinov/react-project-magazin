import React from 'react';
import "./Common/Style/Reset.css"
import "./Common/Style/Grid.css"
import "./Common/Style/Base.css"

import Header from "./App/Header/Header.js"
import Main from "./App/Main/Main.js"
import Footer from "./App/Footer/Footer"



const App = () => {
  return (
    <>
        <Header/>
        <Main/>
        <Footer/> 
    </>
  )
}



export default App;
