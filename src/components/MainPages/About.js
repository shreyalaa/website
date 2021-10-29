import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./About.module.css"

const About = () =>{
    return(
        <React.Fragment>
            <div className = {classes.btn}>
            <button><NavLink style={{textDecoration:"none" ,color: "white" , fontSize:"1rem",fontWeight:"bold"}} to = "/signup">Sign up</NavLink></button>
            </div>
            <div className = {classes.about}>
               
                <h1>About us</h1>
                <section>
                    Putting a face to your brand helps to humanize it, communicate your company culture, and shine a light on the people who power your business.
                    Even if you only highlight the founders, your About Us page can be a chance to build your personal brand and share how your story and experience makes you and your company a good fit to serve your market.
                    Putting a face to your brand helps to humanize it, communicate your company culture, and shine a light on the people who power your business.
                    Even if you only highlight the founders, your About Us page can be a chance to build your personal brand and share how your story and experience makes you and your company a good fit to serve your market.
                    Putting a face to your brand helps to humanize it, communicate your company culture, and shine a light on the people who power your business.
                    Even if you only highlight the founders, your About Us page can be a chance to build your personal brand and share how your story and experience makes you and your company a good fit to serve your market.
                    A  n About Us Page is a page on your website that tells your readers all about you. It includes a detailed description covering all aspects of your business and you as an entrepreneur. This can include the products or services you are offering, how you came into being as a business, your mission and vision, your aim, and maybe something about your future goals too. Your About Us page is your perfect opportunity to tell a compelling story about your business.
                    Even though an About Us page is one of the most important elements of a website, it is often one of the most overlooked elements. Compared to a landing page, an About Us page help you communicate a range of things:
                    The story of your brand and why you started it. 
                    The cause or customers that your business serves.
                    Your business model or how your products are sourced/manufactured.

                </section>
                <h1>Join Us</h1>
                <button><NavLink to = "https://instagram.com"><i class="fab fa-instagram"></i></NavLink></button>
                <button><NavLink style={{color:"blue" , marginLeft:"3rem"}} to = "https://instagram.com"><i class="fab fa-twitter"></i></NavLink></button>
            </div>
           
        </React.Fragment>
    )
}

export default About