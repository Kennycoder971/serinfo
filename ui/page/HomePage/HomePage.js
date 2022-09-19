import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = ({ error, upcomingFr, upcomingUs }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(upcomingFr);

  return (
    <main className={styles.HomePage}>
      <section className={styles.france}>
        <h1>Upcoming today in France</h1>

        <div className={styles.grid}></div>
      </section>

      <section className={styles.usa}>
        <h1>Upcoming today in the USA</h1>
      </section>
    </main>
  );
};

export default HomePage;
