import { useEffect, useState, useContext } from "react";

import SearchPage from "../../ui/page/SearchPage/SearchPage";
import axiosReq from "../../utils/axiosReq";
import SerieContext from "../../store/serie-context";
export default function Search() {
  const [error, setError] = useState("");
  const [shows, setShows] = useState([]);
  const { term } = useContext(SerieContext);

  async function search() {
    const urlTerm = location?.pathname.split("/search/").join("");
    const url = `${process.env.NEXT_PUBLIC_API_URL}/search/shows?q=${
      term || urlTerm
    }`;
    try {
      const { data: shows, error } = await axiosReq(url, "get");

      if (error) throw new Error();

      setShows(shows);
    } catch (error) {
      setError("Something went wrong, try again later");
    }
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      search();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return <SearchPage error={error} shows={shows} />;
}
