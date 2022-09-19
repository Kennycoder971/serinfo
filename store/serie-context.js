import { createContext, useState } from "react";

const SerieContext = createContext({
  upcomingFr: [],
  upcomingUs: [],
});

export function SerieContextProvider({ children }) {
  const [upcomingFr, setUpcomingFr] = useState([]);
  const [upcomingUs, setUpcomingUs] = useState([]);

  function addUpcomingFr(newUpcomingFr) {
    setUpcomingFr(newUpcomingFr);
  }

  function addUpcomingUs(newUpcomingUs) {
    setUpcomingUs(newUpcomingUs);
  }

  const context = { upcomingFr, upcomingUs, addUpcomingFr, addUpcomingUs };

  return (
    <SerieContext.Provider value={context}>{children}</SerieContext.Provider>
  );
}

export default SerieContext;
