"use client";
import { useEffect, useState } from "react";
import getQuote from "../actions/getQuote";
import CoinLoader from "./CoinLoader";

export default function QuoteDisplay() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newQuote = async () => {
      const data = await getQuote();
      setQuote(data);
      setLoading(false);
    };
    newQuote();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const data = await getQuote();
    setQuote(data);
    await new Promise((resolve) => setTimeout(resolve, 500));

    setLoading(false);
  };

  return (
    <div
      onClick={handleClick}
      className={`quote-container flex flex-col justify-evenly items-center rounded-sm shadow-lg shadow-black bg-amber-500 p-6 w-5/6 min-h-[40%] md:w-4/6 lg:w-3/6
        ${
          loading
            ? "cursor-disabled hover:bg-amber-500 pointer-events-none"
            : "cursor-pointer hover:bg-amber-600 active:bg-orange-400"
        }`}
    >
      {loading ? (
        <CoinLoader />
      ) : (
        <>
          <p className="p-2 text-xl md:text-2xl">{quote?.text}</p>
          <h2 className="italic text-2xl">{quote?.author}</h2>
        </>
      )}
    </div>
  );
}
