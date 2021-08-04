import React, { useReducer, createContext, useEffect } from "react";
import { reducer, initialState } from "./GlobalState";

// createContext creates a provider AND a consumer
export const GlobalContext = createContext({
    state: initialState,
    dispatch: (action) => {},
});

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const darkMode = localStorage.getItem("darkMode");
        if (darkMode !== null) {
            if (darkMode === "true") {
                document.body.classList.add("dark");
                document.body.classList.add("bg-gray-800");
            } else {
                document.body.classList.remove("dark");
                document.body.classList.remove("bg-gray-800");
            }
        }
    }, [state.isDark]);

    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
