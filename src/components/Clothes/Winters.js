import React from "react"
import { NavLink } from "react-router-dom"
import Card from "./Card"
import classes from "./Winters.module.css"
import dress from "../../images/dress.jpg"
const winters = [
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

const Winters =() =>{
    return(
        <React.Fragment>
            <div className = {classes.winter_container}>
            <div className  = {classes.winter_actions}>
            <NavLink style= {{textDecoration:"none"}} to = "/home"><button ><i class="far fa-hand-point-left"></i>Go to home page</button></NavLink>
            <button><i class="fas fa-shopping-cart"></i> my cart</button>
            </div>    
                <h1>The best winter collection is here!!</h1>
                {
                    winters.map((ele)=> {
                        return( 
                            <Card heading = {ele.heading} text = {ele.text} img ={ele.img}/>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Winters