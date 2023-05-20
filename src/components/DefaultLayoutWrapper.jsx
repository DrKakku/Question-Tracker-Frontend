import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import "../css/homepage.sass"

function DefaultLayoutWrapper({children}) {
  return (
    <div className="defaultLayout">
        <Navbar/>

        <div className="content">
            {children}
        </div>

        <Footer/>
    
    </div>
  )
}

export default DefaultLayoutWrapper