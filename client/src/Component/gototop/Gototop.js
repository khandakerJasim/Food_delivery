import React, { useEffect, useState } from "react";
import { AiFillMessage, AiOutlineArrowUp } from "react-icons/ai";

export default function Gototop() {
  const [visible, setvisible] = useState(false);

  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const btnlisten = () => {
    let tophidden = 250;
    const Winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (Winscroll > tophidden) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", btnlisten);
    return window.removeEventListener("scroll", btnlisten);
  });
  return (
    <div className="flex items-center fixed bottom-[50px] gap-3 right-5 z-50  ">
      {visible ? (
        <button onClick={() => gotobtn()}>
          <AiOutlineArrowUp className="text-3xl animate-bounce text-blue-500" />
        </button>
      ) : (
        <button onClick={() => gotobtn()}>
          <AiOutlineArrowUp className="text-3xl animate-bounce text-blue-500" />
        </button>
      )}
      <button>
        <AiFillMessage className="text-3xl animate-pulse text-green-500" />
      </button>
    </div>
  );
}
