import { Link } from 'gatsby'
import React from 'react'
import "../css/navbar.sass"

function Navbar() {
  return (
    <div className="navbar">
        <h1>Question Tracker App (Work in progress)</h1>
        <div className='links'>
            <Link to="/"> Home Page </Link>
            <Link to="/dataInput"> Enter Question </Link>
            <Link to="/checkQuestions"> Check Questions </Link>
        </div>
    </div>
  )
}

export default Navbar