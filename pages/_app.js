import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>atlc.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
