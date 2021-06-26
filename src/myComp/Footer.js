import React from 'react'
import './footer.css'
<footer className="css"></footer>
export const Footer = () => {
    let footerStyle ={
        top: "150vh",
        border: "2px solid red",
        position: "absolute",
        width: "100%" ,
        
    }
    
    return (
        <footer className="bg-dark text-light py-3" style=
        {footerStyle}>           
        <center><p>
        Copyright &copy, Cherriee.com</p></center>
            
        </footer>
    )
}
