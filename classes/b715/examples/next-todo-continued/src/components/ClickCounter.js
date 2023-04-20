"use client";

import { useEffect, useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount(count => count + 1);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <p>{count}</p>
}