import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Cast.module.scss";
import axiosReq from "../../../utils/axiosReq";

const Cast = ({ cast, error }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.Cast}>
      <h2>Cast</h2>
      <ul className={styles.grid}>
        {cast?.map(({ character, person }) => {
          return (
            <li key={character?.name}>
              <Image
                width={200}
                height={300}
                src={character?.image?.medium || person?.image?.medium}
                alt={person.name}
              />

              <div className={styles.info}>
                <h4>{person.name}</h4> as <p>{character.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
