import styles from "./GeradorBola.module.css";

export function GeradorBola({ bolas }) {
  function imprimeBolas() {
    return bolas.map((bola) => (
      <span key={bolas.indexOf(bola)}>
        <h3 className={styles.bola}>{bola}</h3>
      </span>
    ));
  }
  return <>{imprimeBolas()}</>;
}
