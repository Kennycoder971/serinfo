import React from "react";
import styles from "./EpisodeCard.module.scss";
import Image from "next/image";
import Link from "next/link";
const EpisodeCard = ({ show }) => {
  return (
    <div className={styles.EpisodeCard}>
      <Link href={`/shows/${show?.id}`}>
        <a>
          <Image
            src={show?.image?.medium || process.env.NEXT_PUBLIC_PLACEHOLDER}
            height={300}
            width={200}
          />

          <h4>{show?.name}</h4>
        </a>
      </Link>
    </div>
  );
};

export default EpisodeCard;
