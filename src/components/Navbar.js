import React from 'react'
import memeLogo from "../images/memeLogo.png"
export default function Navbar() {
    function handleMouseOver(){
        console.log("I was over the img.")
    }
  return (
    <nav className="nav">
        <img
          src={memeLogo}
          alt="This is an img." className="nav-logo"
          onMouseOver={handleMouseOver}
        />
        <h3>Meme Generator</h3>
        <h4 className="nav-items">React Project</h4>         
      </nav>
  )
}
