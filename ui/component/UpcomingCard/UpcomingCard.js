import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UpcomingCard.module.scss";

const UpcomingCard = ({ upcomingEpisode }) => {
  const { number, season, _embedded } = upcomingEpisode;

  const { image, name, id } = _embedded.show;

  return (
    <div className={styles.UpcomingCard}>
      <Link href={`/shows/${id}`}>
        <a>
          <Image
            width={200}
            height={300}
            src={image?.medium || process.env.NEXT_PUBLIC_PLACEHOLDER}
          />
          <h4>{name}</h4>
          <p>Episode {number}</p>
          <p>Season {season}</p>
        </a>
      </Link>
    </div>
  );
};

export default UpcomingCard;
