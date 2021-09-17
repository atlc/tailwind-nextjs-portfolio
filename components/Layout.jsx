import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { GlobalContext, GlobalProvider as Store } from "../providers/GlobalProvider";
import { useContext } from "react";

const Layout = ({ children }) => {
    const { state } = useContext(GlobalContext);
    const { colorTheme: color } = state;

    return (
        <Store>
            <Head>
                <title>atlc.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`bg-white-50 dark:bg-grey-900 min-h-screen`}>
                <Navbar />
                {children}
            </div>
        </Store>
    );
};

export default Layout;
