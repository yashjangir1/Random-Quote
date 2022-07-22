import React from "react"
import "./index.css"

export default function Quote(props){
    document.querySelector("h1").style.color = props.color
    document.querySelector("p").style.color = props.color
    document.querySelector("body").style.backgroundColor = props.color
    document.querySelector(".twitter-button").style.backgroundColor = props.color
    document.querySelector(".tumblr-button").style.backgroundColor = props.color
    document.querySelector(".new-quote-button").style.backgroundColor = props.color

    return(
       <div>
         <h1 className = "quote-text"><i className = "fa-solid fa-quote-left quote-sign"></i>  {props.quote}</h1>
         <p className = "author">- {props.author}</p>
       </div>
    );
}