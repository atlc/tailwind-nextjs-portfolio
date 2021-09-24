import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>atlc.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`bg-white-50 dark:bg-grey-900 min-h-screen`}>
                <Navbar />
                {children}
            </div>
        </>
    );
};

export default Layout;
