import { createSlice } from "@reduxjs/toolkit";

const DARK_MODE_KEY = "darkMode";
const COLOR_THEME_KEY = "colorTheme";
const HAS_VISITED_KEY = "hasVisited";

const IS_SERVER = typeof window === "undefined";

const local_storage = {};

// Necessary for debug only mode since Nextjs isn't sure if this is server-side or client-side code
// Otherwise the values would just be evaluated in their respective initial states
// Consider checking NODE ENV for cleanup later
if (!IS_SERVER) {
    const darkMode = localStorage.getItem(DARK_MODE_KEY);
    const colorTheme = localStorage.getItem(COLOR_THEME_KEY);
    const hasVisited = localStorage.getItem(HAS_VISITED_KEY);

    if (darkMode) {
        local_storage.darkMode = JSON.parse(darkMode);
    }
    if (colorTheme) {
        local_storage.colorTheme = colorTheme;
    }
    if (hasVisited) {
        // If anything exists in LS for this property, then they've already been here. No need to parse/evaluate
        local_storage.hasVisited = true;
    }
}

export const colorSlice = createSlice({
    name: "color",
    initialState: {
        value: local_storage.colorTheme || "indigo"
    },
    reducers: {
        change_color: (state, action) => {
            localStorage.setItem(COLOR_THEME_KEY, action.payload);
            state.value = action.payload;
        }
    }
});

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        value: local_storage.darkMode || false
    },
    reducers: {
        toggle: state => {
            if (!state.value) {
                document.body.classList.add("dark");
                document.body.classList.add("bg-gray-800");
            } else {
                document.body.classList.remove("dark");
                document.body.classList.remove("bg-gray-800");
            }
            localStorage.setItem(DARK_MODE_KEY, !state.value);
            state.value = !state.value;
        }
    }
});

export const hasVisitedSlice = createSlice({
    name: "hasVisited",
    initialState: {
        value: local_storage.hasVisited || false
    },
    reducers: {
        check_in: state => {
            localStorage.setItem(HAS_VISITED_KEY, true);
            state.value = true;
        }
    }
});

export const selectColor = state => state.color.value;
export const selectDarkMode = state => state.darkMode.value;
export const selectHasVisited = state => state.hasVisited.value;

export const { change_color } = colorSlice.actions;
export const { toggle } = darkModeSlice.actions;
export const { check_in } = hasVisitedSlice.actions;

export default { colorReducer: colorSlice.reducer, darkModeReducer: darkModeSlice.reducer, hasVisited: hasVisitedSlice.reducer };
