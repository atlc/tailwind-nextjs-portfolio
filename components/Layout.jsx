import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { GlobalProvider as Store } from "../providers/GlobalProvider";

const Layout = ({ children }) => {
    return (
        <Store>
            <Head>
                <title>atlc.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </Store>
    );
};

export default Layout;
