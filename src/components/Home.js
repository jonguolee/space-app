import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

export default function Home() {
    const [quoteData, setQuoteData] = useState(null);

    useEffect(() => {
        fetchQuote();

        async function fetchQuote() {
            const res = await fetch(
                `https://jonguolee.github.io/space-facts/Data/space-facts.json`
            );
            const data = await res.json();
            setQuoteData(data);
        }
    }, []);

    if (!quoteData) return <div />;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };




    return (

        <div className="home">
            <video src="videos/space-vid.mp4" autoPlay loop muted></video>
            <Typist cursor={{ show: false }}>
                <h1 className="fancy">{quoteData.facts[getRandomInt(quoteData.facts.length)].content}</h1>
            </Typist>

            <Link className="home-link" to="/nasaphoto">Explore the Cosmos</Link>


        </div>
    );
}

//https://jonguolee.github.io/space-facts/space-facts.json