import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou João Paulo</h1>
        <p className={styles.description}>
          Sou desenvolvedor backend com experência na construção de software robusto e eficaz,
          usando Java, SQL e outros Frameworks
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Entre em Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/fotor-20250203112736.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
