module.exports = {
    purge: {
        content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
        safelist: [/(dark:)?\w+-[\w+|\$\{color\}]*-\d{2,3}/]
    },
    darkMode: "class",
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
