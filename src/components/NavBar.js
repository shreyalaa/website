import React from "react"
import classes from "./NavBar.module.css"
import image from "../images/image1.jpg"
import Description from "./Description"
import Footer from "./Footer"
import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <React.Fragment>
            <ul className = {classes.navbar}>
                <li><NavLink style= {{color:"white" ,textDecoration:"none"}} to = "/"> Home</NavLink></li>
                <li><NavLink style= {{color:"white" ,textDecoration:"none"}} to = "/about">About Us</NavLink></li>
                <li><NavLink style= {{color:"white" ,textDecoration:"none"}} to = "/feedback">Feedback</NavLink></li>
            </ul>
            <div className = {classes.shopwithus}>
                <button><li>shop with us</li></button>
            </div>
            <div className = {classes.img}>
                <img src = {image}/>
            </div>
            <Description/>
            <Footer/>
        </React.Fragment>
    )
}
export default NavBar