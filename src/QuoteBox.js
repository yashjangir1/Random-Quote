import React from "react"
import "./index.css"

export default function QuoteBox(){
    const[click, setClick] = React.useState(false)
    const [quote, setQuote] = React.useState("")
    const[author, setAuthor] = React.useState("")
    const[randomC, setRandomC] = React.useState("#45EA7F")

    function handleNewQuote(){
        setClick((prevClick) => !prevClick);
        setRandomC(randomColor())
    }

    function randomColor(){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleTweetButton(){
        let url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
        url += quote.split(" ").join("%20")
        url += "%22%20" + author.split(" ").join("%20")
        window.location.href = url
    }

    function handleTumblrShare(){
        let url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="
        url += author.split(" ").join("%20")
        url += "&content=" + quote.split(" ").join("%20") + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        window.open(url, "_blank")
    }

    React.useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.content)
            setAuthor(data.author)
        })
    }, [click])

    document.querySelector("body").style.backgroundColor = randomC

    return(
        <div className = "quote-box">
            <div>
                <h1 style = {{color : randomC}} className = "quote-text"><i className = "fa-solid fa-quote-left quote-sign"></i> {quote}</h1>
                <p style = {{color : randomC}} className = "author">- {author}</p>
            </div>
            <div className = "buttons-container">
                <button style = {{backgroundColor : randomC}} className="twitter-button" onClick = {handleTweetButton}><i className = "fa-brands fa-twitter"></i></button>
                <button style = {{backgroundColor : randomC}} className="tumblr-button" onClick = {handleTumblrShare}><i className = "fa-brands fa-tumblr"></i></button>
                <button style = {{backgroundColor : randomC}} className="new-quote-button" onClick = {handleNewQuote}>New Quote</button>
            </div>
        </div>
    )
}