import React from "react"
import { NavLink } from "react-router-dom"
import classes from  "./Description.module.css"
const Description = () =>{
    return(
        <React.Fragment>
            <div className = {classes.description}>
                <h2>Join the latest trends here</h2>
                <ul className = {classes.lists}>
                    <li>summers <button><NavLink style = {{listStyle:"none"}} to = "/summers" ><i class="fas fa-arrow-circle-right"></i></NavLink></button></li>
                    <li>winters <button><NavLink style = {{listStyle:"none"}} to = "/winters" ><i class="fas fa-arrow-circle-right"></i></NavLink></button></li>
                    <li>party wear <button><NavLink style = {{listStyle:"none"}} to = "/partywear" ><i class="fas fa-arrow-circle-right"></i></NavLink></button></li>
                    <li>casuals <button><NavLink style = {{listStyle:"none"}} to = "/casuals" ><i class="fas fa-arrow-circle-right"></i></NavLink></button></li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Description