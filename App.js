import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import '/styles.css'


const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null)

    const getQuotes = async () => {
        const data = await fetch('https://type.fit/api/quotes');
        const res = await data.json();
        setQuotes(res);
        setQuote(res[0]);
        console.log(res)
    }

    useEffect(() => {
        getQuotes()
    }, [])


    const getNewQuote = () => {
        setQuote(getRandomQuote(quotes));
    }


    return (
        <div className="main-container">
            <h1>Quote Generator</h1>
            <div className="container">
                <h3>
                    <span>"</span>
                    {quote?.text}
                    <span>"</span>
                </h3>
                <p>- {!quote?.author ? "Unknown" : quote?.author}</p>
            </div>
            <button onClick={getNewQuote}>New Quote</button>
        </div>

    )
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)







