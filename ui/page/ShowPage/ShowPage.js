import Cast from "../../component/Cast/Cast";
import styles from "./ShowPage.module.scss";
import Image from "next/image";
import Link from "next/link";

const ShowPage = ({ show, cast }) => {
  return (
    <article className={styles.ShowPage}>
      <div className={styles.principal}>
        <div className={styles.card}>
          <h1>{show?.name}</h1>
          <Image
            src={show?.image?.medium || ""}
            height={350}
            width={250}
            alt={show?.name}
          />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: show?.summary }}
          alt={show?.name}
        ></p>
      </div>
      <p className={styles.runtime}>
        Average runtime: {show?.averageRuntime} minutes
      </p>
      <Link href={show?.officialSite || ""}>
        <a className={styles.officialSite}>Official Site</a>
      </Link>

      <Cast cast={cast} />
    </article>
  );
};

export default ShowPage;
