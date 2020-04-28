import { SET_LOADER, SET_SEARCH_TEXT, REMOVE_LOADER } from "../../types";

const setLoader = () => ({ 
  type: SET_LOADER 
}) 

const removeLoader = () => ({ 
  type: REMOVE_LOADER
}) 

export const setNewSearchText = text => ({ 
  type: SET_SEARCH_TEXT,
  payload: text
}) 