import React, { useState, useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { AiOutlineCode } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdColorPalette } from "react-icons/io";

const links = [
    { path: "/", text: "Home" },
    { path: "/experience", text: "Experience" },
];

const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showColorModal, setShowColorModal] = useState(false);
    const { state, dispatch } = useContext(GlobalContext);
    const { pathname } = useRouter();

    const standardButtonClasses = `text-${state.colorTheme}-900 hover:bg-${state.colorTheme}-500 hover:text-white px-3 py-2 rounded-md text-md font-medium`;
    const activeButtonClasses = `text-gray-100 shadow-xl bg-${state.colorTheme}-600 px-3 py-2 rounded-md text-md font-medium`;

    const mobileButtonClasses = `text-${state.colorTheme}-900 hover:bg-${state.colorTheme}-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium`;
    const mobileActiveButtonClasses = `text-gray-100 shadow-xl bg-${state.colorTheme}-600 block px-3 py-2 rounded-md text-base font-medium`;

    return (
        <>
            {showColorModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className={`dark:bg-${state.colorTheme}-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h1 className={`text-center text-3xl dark:text-${state.colorTheme}-800`}>
                                        We're updating the{" "}
                                        <span className={`text-${state.colorTheme}-600`}>color theme</span> for this
                                        whole site with React's Context API & persisting your choice in{" "}
                                        <code>localStorage!</code>
                                    </h1>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowColorModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="flex flex-wrap justify-center">
                                        {colors.map((color) => (
                                            <button
                                                onClick={() => dispatch({ type: "change_color", payload: color })}
                                                key={`${color}-button-selector`}
                                                className={`shadow-xl bg-${color}-500 hover:bg-${color}-900 hover:text-${color}-300 text-white block px-3 py-2 mx-1 mt-2 rounded-md text-base font-medium`}
                                            >
                                                <code>{color}</code>
                                            </button>
                                        ))}
                                        <button
                                            className="border border-solid dark:text-white border-black mx-2 block px-3 py-2 mt-4 rounded-md text-base font-medium"
                                            onClick={() => dispatch({ type: "toggle_dm" })}
                                        >
                                            See colors in {state.isDark ? "light" : "dark"} mode
                                        </button>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className={`text-${state.colorTheme}-500 bg-gray-700 font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        onClick={() => setShowColorModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            <nav className={`mb-4 bg-${state.colorTheme}-400 shadow-md dark:bg-gray-900`}>
                {/* Adapted from the TailwindUI example nav */}
                {/* https://tailwindui.com/components/application-ui/navigation/navbars */}
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                onClick={() => setOpenMenu(!openMenu)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed. Heroicon name: outline/menu. Menu open: "hidden", Menu closed: "block" */}
                                <svg
                                    className={`block w-6 h-6 text-2xl text-${state.colorTheme}-900`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                            <div className="flex items-center flex-shrink-0">
                                <a
                                    href="/"
                                    className={`flex w-auto h-8 text-3xl text-${state.colorTheme}-900 lg:hidden`}
                                >
                                    <AiOutlineCode />
                                    <span className="pl-1 text-2xl">@atlc</span>
                                </a>
                                <a
                                    href="/"
                                    className={`items-center hidden w-auto h-8 text-4xl text-${state.colorTheme}-900 lg:flex`}
                                >
                                    <AiOutlineCode />
                                    <span className="pl-1 text-2xl">@atlc</span>
                                </a>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {links.map(({ path, text }, index) => (
                                        <Link key={`nav-link-${index}`} href={path}>
                                            <button
                                                className={
                                                    path === pathname ? activeButtonClasses : standardButtonClasses
                                                }
                                            >
                                                {text}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`flex text-2xl dark:text-${state.colorTheme}-700`}>
                            <button onClick={() => setShowColorModal(true)} className="mx-2">
                                <IoMdColorPalette />
                            </button>
                            <button className="mx-2" onClick={() => dispatch({ type: "toggle_dm" })}>
                                {state?.isDark ? <FiMoon /> : <FiSun />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {openMenu && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            {links.map(({ path, text }, index) => (
                                <Link key={`nav-link-${index}`} href={path}>
                                    <button
                                        onClick={() => setOpenMenu(false)}
                                        className={path === pathname ? mobileActiveButtonClasses : mobileButtonClasses}
                                    >
                                        {text}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
