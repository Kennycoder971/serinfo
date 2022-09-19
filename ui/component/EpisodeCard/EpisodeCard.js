import React from "react";
import styles from "./EpisodeCard.module.scss";
import Image from "next/image";
import Link from "next/link";
const EpisodeCard = ({ show }) => {
  console.log(show);
  return (
    <div className={styles.EpisodeCard}>
      <Link href={"/"}>
        <a>
          <Image src={show?.image?.medium} height={300} width={200} />

          <h4>{show?.name}</h4>
        </a>
      </Link>
    </div>
  );
};

export default EpisodeCard;
