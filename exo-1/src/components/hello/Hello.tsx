import { useEffect, useState } from "react";
import "./Hello.css";

function Hello({ text }: { text: string }) {
  const [count, setCount] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);
  const resetTimerFct = () => setResetTimer(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resetTimer]);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={inc}>Incrémenter</button>
      <button onClick={dec}>Décrémenter</button>
      <button onClick={reset}>Remise à zéro</button>
      <p>{time}</p>
      <button onClick={resetTimerFct}>Reset Timer</button>
      <p>Bonjour {text}</p>
    </div>
  );
}

export default Hello;
