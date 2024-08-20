import getQuote from "./actions/getQuote";
import QuoteDisplay from "./components/QuoteDisplay";

export default function Home() {
  getQuote();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[100dvh]">
      <QuoteDisplay />
    </div>
  );
}
