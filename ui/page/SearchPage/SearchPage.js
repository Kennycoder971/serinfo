import styles from "./SearchPage.module.scss";
import EpisodeCard from "../../component/EpisodeCard/EpisodeCard";

const SearchPage = ({ error, shows }) => {
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.SearchPage}>
      {shows.length === 0 ? (
        <p>No results found</p>
      ) : (
        shows.map(({ show }) => {
          return <EpisodeCard show={show} key={show.id} />;
        })
      )}
    </div>
  );
};

export default SearchPage;
