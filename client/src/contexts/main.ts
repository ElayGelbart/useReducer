import React, { createContext } from "react";

const mainContext = createContext(
  {} as {
    state: Reducer.mainReducers.state;
    dispacth: React.Dispatch<Reducer.mainReducers.action>;
  }
);
export default mainContext;
