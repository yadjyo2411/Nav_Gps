import React from 'react'
import propTypes from 'prop-types'




export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">


               <a class="nav-link active" aria-current="page" data-bs-toggle="offcanvas" 
                 role="button" aria-controls="offcanvasExample">
                  <button class="btn btn-outline-success me-2"  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                  type="button">Home</button></a>
              </li>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" 
aria-labelledby="offcanvasExampleLabel">
 
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Choose :</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" 
    aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Select you choice here. 
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button"
       id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Cities</a></li>
        <li><a class="dropdown-item" href="#">Capital</a></li>
        <li><a class="dropdown-item" href="#">Local-area</a></li>
      </ul>
    </div>
  </div>
</div>
               
<li className="nav-item">   
      <p>
        <a class="nav-link active" aria-current="page" tabindex="-1" data-bs-toggle="collapse" aria-disabled="true"
        aria-disabled="true" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           <button class="btn btn-outline-success me-2" type="button" data-bs-toggle="tooltip" 
data-bs-placement="bottom" title="India is a huge country in Asia with 1,203,685.0 sq mi area (3,287,263.0 km2). 1,210,193,422 local people 
live there, the population density is high, circa 953 / square miles (368 / km2). The international phone 
area code is +91 and they use the .in for internet tld. Current local time in India: June 25, 2021, 11:20 am. 
The geometric center of the country is approximately
 at 20.5937 latitude, 78.9629 longitude. The capital city of India is New Delhi.">About</button> 
        </a>
      </p>
      
</li>
            
            
            
            
            
            
            
            <li>
            <a class="nav-link active" href="#" tabindex="" aria-disabled="true" >
            <button class="btn btn-outline-success me-2" type="button" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>Gps</button></a>
              </li>

            







              <li className="nav-item">
               
              
             

      <p>
        <a class="nav-link disable" aria-current="page" tabindex="-1" data-bs-toggle="collapse" 
        aria-disabled="true" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           <button class="btn btn-outline-success me-2" type="button" data-bs-toggle="tooltip" 
data-bs-placement="bottom" title="GO TO googleMaps to see further information">Help?</button>
        </a>
      </p>


</li>
</ul>























            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : ""}
          </div>
        </div>
      </nav>
    
            
        
    )
}
header.defaultProps ={
  title: "Your title here",
  searchBar:true
}

header.propTypes ={
title: propTypes.string,
searchBar: propTypes.bool.isRequired


}
