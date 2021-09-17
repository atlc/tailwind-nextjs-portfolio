export const reducer = (state, action) => {
    switch (action.type) {
        case "change_color":
            localStorage.setItem("colorTheme", action.payload);
            return {
                ...state,
                colorTheme: action.payload
            };
        case "toggle_dm":
            localStorage.setItem("darkMode", !state.isDark);
            return {
                ...state,
                isDark: !state.isDark
            };
        default:
            return state;
    }
};

export const initialState = {
    isDark: false,
    loadFromLocalStorage: false,
    colorTheme: "indigo"
};
