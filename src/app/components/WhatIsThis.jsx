"use client";
import Question from "../../../public/info.png";
import Image from "next/image";
import { useState } from "react";

export default function WhatIsThis() {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }
  console.log(visible);
  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center justify-center cursor-pointer bg-red-900 border-2 border-amber-800 border-solid p-2 rounded-xl absolute top-0 right-0 m-4 hover:bg-red-800 "
      >
        <Image src={Question} alt="A question mark" height={25} width={25} />
        {visible ? (
          <>
            <div className="flex flex-col items-center justify-center gap-2 min-w-48 bg-amber-500 border-2 border-red-900 border-solid p-4 rounded-xl absolute top-0 right-full m-4 shadow-lg shadow-black">
              <p className="text-lg">
                A simple page which shows you a Stoic quote.
              </p>
              <p className="text-lg">Click the quote box to get a new one.</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
