import React from "react";
import { AppContext } from "../lib/app-context";

export default function useAppContext() {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
}
