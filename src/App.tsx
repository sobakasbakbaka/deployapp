import { useState } from "react";
import styles from "./app.module.css";
import { Test } from "./Test";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecClick = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1>Counter 2.0</h1>
      <div className={styles.counter}>
        <button className={styles.button} onClick={handleDecClick}>
          -
        </button>
        <p className={styles.number}>{counter}</p>
        <button className={styles.button} onClick={handleIncClick}>
          +
        </button>
      </div>
      <Test />
    </div>
  );
};
