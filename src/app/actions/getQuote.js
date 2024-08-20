"use server";

export default async function getQuote() {
  const response = await fetch("https://stoic-quotes.com/api/quote");
  const quote = await response.json();

  return quote;
}
