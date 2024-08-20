"use client";
import { useEffect, useState } from "react";
import getQuote from "../actions/getQuote";

export default function QuoteDisplay() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const newQuote = async () => {
      const data = await getQuote();
      setQuote(data);
    };
    newQuote();
  }, []);

  const handleClick = async () => {
    const data = await getQuote();
    setQuote(data);
  };

  return (
    <>
      <h2 onClick={handleClick}>I am the quote display</h2>
      <h3>{quote.author}</h3>
      <h3>{quote.text}</h3>
    </>
  );
}
