import { createContext, useState } from "react";

const SerieContext = createContext({
  term: "",
  upcomingFr: [],
  upcomingUs: [],
});

export function SerieContextProvider({ children }) {
  const [term, setTerm] = useState("");
  const [upcomingFr, setUpcomingFr] = useState([]);
  const [upcomingUs, setUpcomingUs] = useState([]);

  function changeTerm(term) {
    setTerm(term);
  }

  function addUpcomingFr(newUpcomingFr) {
    setUpcomingFr(newUpcomingFr);
  }

  function addUpcomingUs(newUpcomingUs) {
    setUpcomingUs(newUpcomingUs);
  }

  const context = {
    upcomingFr,
    upcomingUs,
    term,
    changeTerm,
    addUpcomingFr,
    addUpcomingUs,
  };

  return (
    <SerieContext.Provider value={context}>{children}</SerieContext.Provider>
  );
}

export default SerieContext;
