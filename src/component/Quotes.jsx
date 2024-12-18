import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/quotes");
        setQuotes(response.data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };
    fetchQuotes();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {randomQuote && (
        <div style={{ fontStyle: "italic", marginBottom: "10px" }}>
          <p>
            <ImQuotesLeft /> {randomQuote.quote} <ImQuotesRight />
          </p>
          <p>- {randomQuote.author}</p>
        </div>
      )}
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default Quotes;
