import React from "react";
import styles from "./HomePage.module.scss";
import UpcomingCard from "../../component/UpcomingCard/UpcomingCard";
const HomePage = ({ error, upcomingFr, upcomingUs }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <main className={styles.HomePage}>
      <section className={styles.france}>
        <h1>New Episodes today in France </h1>

        <div className={styles.grid}>
          {upcomingFr.length === 0 ? (
            <p>Nothing for now</p>
          ) : (
            upcomingFr?.map((upcomingEpisode) => {
              return (
                <UpcomingCard
                  upcomingEpisode={upcomingEpisode}
                  key={upcomingEpisode.id}
                />
              );
            })
          )}
        </div>
      </section>

      <section className={styles.usa}>
        <h1>New Episodes today in the USA</h1>
        <div className={styles.grid}>
          {upcomingUs.length === 0 ? (
            <p>Nothing for now</p>
          ) : (
            upcomingUs?.map((upcomingEpisode) => {
              return (
                <UpcomingCard
                  upcomingEpisode={upcomingEpisode}
                  key={upcomingEpisode.id}
                />
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
