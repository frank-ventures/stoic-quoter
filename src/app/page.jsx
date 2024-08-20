import getQuote from "./actions/getQuote";
import QuoteDisplay from "./components/QuoteDisplay";
import WhatIsThis from "./components/WhatIsThis";

export default function Home() {
  getQuote();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-red-900">
      <WhatIsThis />
      <QuoteDisplay />
    </div>
  );
}
