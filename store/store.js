import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

export default configureStore({
    reducer: {
        color: reducers.colorReducer,
        darkMode: reducers.darkModeReducer,
        hasVisited: reducers.hasVisited
    }
});
