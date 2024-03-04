import { useRef, useState } from "react";
import styles from "./QuantidadeBolas.module.css";

export function QuantidadeBolas({ quantBolas, setQuantBolas }) {
  const [inputBolas, setInputBolas] = useState();
  const campoRef = useRef(null);

  function trackInputBolas(e) {
    e.preventDefault();
    setInputBolas(e.target.value);
  }

  function handleQuantidadeBolas(e) {
    e.preventDefault();
    if (inputBolas < 61) setQuantBolas(inputBolas);
  }

  function handleZerarBolas(e) {
    e.preventDefault();
    setQuantBolas();
    setInputBolas();
    campoRef.current.value = "";
    campoRef.current.focus();
  }

  return (
    <div className={styles.formContainer}>
      <h2>Amount of Draws:</h2>

      <form>
        <input
          id={styles.campoQuantBolas}
          type="number"
          ref={campoRef}
          onChange={trackInputBolas}
          autoFocus
        />
        <input className={styles.greenButton} type="submit" value="Draw" onClick={handleQuantidadeBolas} />
        <input className={styles.redButton} type="submit" value="Reset" onClick={handleZerarBolas} />
      </form>
      {inputBolas > 60 && <p>Type a Amount Below 61!</p>}
    </div>
  );
}
