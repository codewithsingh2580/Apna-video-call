
import React from 'react'
import "../App.css"
import { Link , useNavigate } from 'react-router-dom'

export default function LandingPage() {
  
  const router = useNavigate();
  return (
    <div className='landingpageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Apna video call</h2></div>
        <div className='navlist'>
          <p onClick={() => {router("/aljk23")}}>
            Join as Guest</p>
          <p onClick={() => {router("/auth")}}>Register</p>
          <div  onClick={() => {router("/auth")}} role='button'>
            login
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved one</h1>

          <p>Cover a distance a apna video call</p>
          <div role='button'>
            <Link to="/auth" >Get Start</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  )
}

