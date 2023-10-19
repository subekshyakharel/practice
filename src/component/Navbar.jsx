import React from 'react'
import CatData from '../Data/CatData'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {CatData.slice(0,8).map((a)=>(
          <li className="nav-item">
          <a className="nav-link" href="#">{a}</a>
        </li>
        ))}
       
        
      </ul>
      
    </div>
  </div>
</nav>
<Routes>
    <Route path='/' element={<Home/>}/>
</Routes>
      
    </>
  )
}

export default Navbar
