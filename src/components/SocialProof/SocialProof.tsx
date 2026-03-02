import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./SocialProof.module.css";

const logos = [
  "Sports-Med",
  "Medhoodie",
  "ODO",
  "NNARS",
  "Sevium",
  "X20",
  "Omniglot",
  "X3D",
];

export default function SocialProof() {
  return (
    <section className={styles.social}>
      <div className={styles.inner}>
        <div className={styles.labelRow}>
          <SectionKicker label="ZAUFAŁO NAM JUŻ PONAD 140 FIRM" />
        </div>

        <div className={styles.logoRow}>
          {logos.map((logo) => (
            <div key={logo} className={`${styles.logoItem} ${styles.logoText}`}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
