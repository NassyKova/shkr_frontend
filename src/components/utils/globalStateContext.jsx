import { createContext, useContext } from "react";

// Create a new context object
const GlobalContext = createContext();

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, useGlobalContext };
