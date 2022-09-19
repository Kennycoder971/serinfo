import { useState } from "react";
import HomePage from "../ui/page/HomePage/HomePage";
import { useEffect, useContext } from "react";
import SerieContext from "../store/serie-context";
import axiosReq from "../utils/axiosReq";
import currentDate from "../utils/currentDate";

export default function Home() {
  const { addUpcomingFr, addUpcomingUs, upcomingFr, upcomingUs } =
    useContext(SerieContext);

  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const urlFr = `${process.env.NEXT_PUBLIC_API_URL}/schedule/web?date=${currentDate}&country=FR`;
        const urlUs = `${process.env.NEXT_PUBLIC_API_URL}/schedule/web?date=${currentDate}&country=US`;
        const { data: upcomingFr, error: errorFr } = await axiosReq(
          urlFr,
          "get"
        );
        const { data: upcomingUs, error: errorUs } = await axiosReq(
          urlUs,
          "get"
        );

        if (errorFr || errorUs) throw new Error();

        addUpcomingFr(upcomingFr);
        addUpcomingUs(upcomingUs);
      } catch (error) {
        console.log(error);
        setError("Something went wrong, try again later");
      }
    })();
  }, []);

  return (
    <HomePage error={error} upcomingFr={upcomingFr} upcomingUs={upcomingUs} />
  );
}
