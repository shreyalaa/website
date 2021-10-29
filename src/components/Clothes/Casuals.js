import React from "react"
import { NavLink } from "react-router-dom"
import Card from "./Card"
import classes from "./Summers.module.css"
import dress from "../../images/dress.jpg"

const casuals = [
    {
        heading: "black kurta",
        text: "the black kurta looks superr awesome in the festive season do wear ",
        img: dress
    },
    {
        heading: "black kurta",
        text: "the black kurta looks awesome in the festive season",
        img: dress
    },
    {
        heading: "black kurta",
        text: "the black kurta looks awesome in the festive season",
        img: dress
    },
    {
        heading: "black kurta",
        text: "the black kurta looks awesome in the festive season",
        img: dress
    }
]

const Casuals =() =>{
    return(
        <React.Fragment>
            <div className = {classes.summer_container}>
            <div className  = {classes.summer_actions}>
            <NavLink style= {{textDecoration:"none"}} to = "/home"><button ><i class="far fa-hand-point-left"></i>Go to home page</button></NavLink>
            <button><i class="fas fa-shopping-cart"></i> my cart</button>
            </div>    
                <h1>The best casuals collection is here!!</h1>
                {
                    casuals.map((ele)=> {
                        return( 
                            <Card heading = {ele.heading} text = {ele.text} img = {ele.img}/>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Casuals