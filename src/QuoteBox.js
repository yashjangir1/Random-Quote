import React from "react"
import Quote from "./Quote"
import "./index.css"

export default function QuoteBox(){
    const[click, setClick] = React.useState(false)
    const [quote, setQuote] = React.useState("")
    const[author, setAuthor] = React.useState("")

    function randomColor(){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let randomC = randomColor()

    function handleNewQuote(){
       setClick((prevClick) => !prevClick);
       document.querySelector("body").style.backgroundColor = randomC
    }

    React.useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.content)
            setAuthor(data.author)
        })
    }, [click])

    return(
        <div className = "quote-box">
            <Quote author = {author} quote = {quote} color = {randomC}/>
            <div className = "buttons-container">
                <button className="twitter-button"><i class="fa-brands fa-twitter"></i></button>
                <button className="tumblr-button"><i class="fa-brands fa-tumblr"></i></button>
                <button className="new-quote-button" onClick = {handleNewQuote}>New Quote</button>
            </div>
        </div>
    )
}