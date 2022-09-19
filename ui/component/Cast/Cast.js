import Image from "next/image";
import styles from "./Cast.module.scss";

const Cast = ({ cast, error }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.Cast}>
      <h2>Cast</h2>
      <ul className={styles.grid}>
        {cast.length === 0 ? (
          <p>No cast found</p>
        ) : (
          cast?.map(({ character, person }) => {
            return (
              <li key={character?.name}>
                <Image
                  width={200}
                  height={300}
                  src={
                    character?.image?.medium ||
                    person?.image?.medium ||
                    process.env.NEXT_PUBLIC_PLACEHOLDER
                  }
                  alt={person.name}
                />

                <div className={styles.info}>
                  <strong>{person.name}</strong> as {character.name}
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Cast;
