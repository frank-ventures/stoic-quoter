"use client";
import Question from "../../../public/info.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatIsThis() {
  const [visible, setVisible] = useState(false);

  // The following state and useEffect manages if the user has hidden this "help box":
  const [userChoice, setUserChoice] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("permanently-closed");
    if (savedChoice) {
      setUserChoice(true);
    }
  }, []);

  function handleClick() {
    setVisible(!visible);
  }

  if (!userChoice)
    return (
      <>
        <div
          onClick={handleClick}
          className="flex items-center justify-center cursor-pointer align-middle bg-red-900 border-2 border-amber-800 border-solid p-2 rounded-xl absolute top-0 right-0 m-4 hover:bg-red-800"
        >
          {visible ? (
            // "leading-7" helps to get our 'X' center aligned
            <p className="text-2xl text-amber-400 text-center leading-7 h-[25px] w-[25px]">
              X
            </p>
          ) : (
            <Image
              src={Question}
              alt="A question mark"
              height={25}
              width={25}
            />
          )}
          {visible ? (
            <>
              <div className="flex flex-col items-center justify-center gap-4 min-w-56 sm:min-w-80 lg:min-w-96 bg-amber-500 border-2 border-red-900 border-solid p-4 rounded-xl absolute top-0 right-full m-4 shadow-lg shadow-black">
                <p className="text-xl">
                  A simple page which shows you a Stoic quote.
                </p>
                <p className="text-xl">Click the quote box to get a new one.</p>
                <button
                  className="bg-amber-500 border-2 border-red-800 border-solid p-2 rounded-xl m-4 hover:bg-red-800 shadow-sm shadow-black"
                  onClick={() => {
                    localStorage.setItem("permanently-closed", true);
                    setUserChoice(true);
                  }}
                >
                  Remove this help box forever
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  return;
}
