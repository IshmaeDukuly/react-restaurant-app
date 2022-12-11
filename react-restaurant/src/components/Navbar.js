import React from "react";


export default function Navbar() {
    return(
        <>
        <div className="navbar">
         <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Online">Online Puchase</a></li>
            <li><a href="/Restaurant">Restaurants</a></li>
            <li><a href="/Contact">Contact Us</a></li>
         </ul>
        </div>
        </>
    );
}