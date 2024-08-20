// Client version
// "use client";

import { revalidatePath } from "next/cache";

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [quote, setQuote] = useState();

//   async function fetchQuote() {
//     const response = await fetch("https://stoic-quotes.com/api/quote");
//     setQuote(await response.json());
//     console.log(quote);
//   }

//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-screen h-[100dvh]">
//       <h1 onClick={fetchQuote}>{quote?.text}</h1>
//     </div>
//   );
// }

// Server version

export default async function Home() {
  async function getQuote() {
    "use server";
    const response = await fetch("https://stoic-quotes.com/api/quote");
    const data = await response.json();
    revalidatePath("/");
    return data;
  }

  // Fetch the initial quote when the page loads
  const quote = await getQuote();

  return (
    <div className="flex items-center justify-center w-screen h-[100dvh]">
      <form action={getQuote}>
        <h1>Quote of the Moment</h1>
        <h2>{quote?.text}</h2>
        <p>{quote?.author}</p>
        <button type="submit">Get Another Quote</button>
      </form>
    </div>
  );
}
