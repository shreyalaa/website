import React, { useState } from "react"
import classes from "./Feedback.module.css"
const Feedback  = () =>{
    const [feedback , setFeedback]= useState("")
    const [list , setList] = useState([])

    const changeHandler = (e) =>{
        setFeedback(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        setList((prevItem) =>{
            return [...prevItem , feedback]
        })
        setFeedback("")
    }

    const deleteHandler = (ind) =>{
       setList((oldItems)=>{
           return oldItems.filter((arrEle , arrEleInd)=>{
               return arrEleInd !== ind
           })
       })
    }

    return(
        <React.Fragment>
          
            <div className = {classes.feedback}>
                <textarea onChange = {changeHandler} placeholder = "enter your feedback here..." value ={feedback}></textarea>
                <button onClick = {submitHandler}>submit</button>
                
                <div className = {classes.lists}>
                <ol>
              {
                  list.map((ele ,ind)=> {return (
                  <div className = {classes.lists2}>
                  <li id = {ind} key = {ind}>{ele}</li>
                  <i onClick = {()=>deleteHandler(ind)} className="far fa-trash-alt"></i>
                  </div>
                  )})
              }
                
                </ol>
            </div>
            </div>
           
        
        </React.Fragment>
    )
}

export default Feedback