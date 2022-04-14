import React from "react";
import { SearchRequest } from "../models/search-request";

export interface AppContextInterface {
  searchRequest: SearchRequest;
  setSearchRequest: (searchRequest: SearchRequest) => void;
}

export const AppContext = React.createContext<AppContextInterface | undefined>(
  undefined
);
