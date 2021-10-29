import React from "react"
import classes from "./Form.module.css"
import image from "../../images/formImage.jpg"
const Form = () =>{
    return(
        <React.Fragment>
            <div  className = {classes.form_container}>
            <image className = {classes.img_container}>
            <img src= {image}/>
            </image>
            <form className = {classes.form}>
            <h1>sign in</h1> 
            <label>first name</label>
            <input 
             placeholder = "enter first name"
             type = "text"
            
            />
            <label>last name</label>
            <input
             placeholder = "enter last name"
             type = "text"
             />
            <label>email</label>
            <input
             placeholder = "enter email"
             type = "email"
            />
            <label>address</label>
            <input
             placeholder = "enter address"
             type = "text"
            />
            <label>phone number</label>
            <input
             placeholder = "enter phone number"
             type = "number"
            />
            <label>password</label>
            <input
             placeholder = "enter password"
             type = "password"
            />
            <label>re-enter password</label>
            <input
             placeholder = "re-enter password"
             type = "password"
            />
            <button>Sign up</button>
            <span>already have an account??</span>
            <button>log in</button>
        </form>
        </div>
        </React.Fragment>
    )
}

export default Form