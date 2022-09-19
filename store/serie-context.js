import { createContext, useState } from "react";

const SerieContext = createContext({
  upcomings: [],
});

export function SerieContextProvider({ children }) {
  const context = { upcomings: [] };

  return <SerieContext.Provider>{children}</SerieContext.Provider>;
}

export default SerieContext;
