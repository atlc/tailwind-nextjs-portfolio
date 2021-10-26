import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { AiOutlineCode } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdColorPalette } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { change_color, selectColor, selectDarkMode, toggle } from "../store/reducers";

const links = [
    { path: "/", text: "Home" },
    { path: "/experience", text: "Experience" },
    { path: "/projects", text: "Projects" },
    { path: "/certifications", text: "Certifications" }
];

const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showColorModal, setShowColorModal] = useState(false);
    const { pathname } = useRouter();
    const color = useSelector(selectColor);
    const isDark = useSelector(selectDarkMode);
    const dispatch = useDispatch();

    const standardButtonClasses = `text-${color}-700 dark:text-${color}-400 hover:bg-${color}-600 hover:text-${color}-100 dark:hover:text-${color}-100 px-3 py-2 rounded-md text-md font-light`;
    const activeButtonClasses = `text-${color}-50 shadow-xl bg-${color}-600 px-3 py-2 rounded-md text-md font-light`;

    const mobileButtonClasses = `text-${color}-700 dark:text-${color}-400 hover:bg-${color}-600 hover:text-${color}-100 dark:hover:text-${color}-100 block px-3 py-2 rounded-md text-base font-light`;
    const mobileActiveButtonClasses = `text-${color}-50 shadow-xl bg-${color}-600 block px-3 py-2 rounded-md text-base font-light`;

    return (
        <>
            {showColorModal && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            {/*content*/}
                            <div
                                className={`dark:bg-${color}-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}>
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                                    <h1 className={`text-center text-3xl dark:text-${color}-800`}>
                                        We're updating the <span className={`text-${color}-600`}>color theme</span> for this whole site with
                                        Redux & persisting your choice in <code>localStorage!</code>
                                    </h1>
                                    <button
                                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                        onClick={() => setShowColorModal(false)}>
                                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6">
                                    <div className="flex flex-wrap justify-center">
                                        {colors.map(color => (
                                            <button
                                                onClick={() => dispatch(change_color(color))}
                                                key={`${color}-button-selector`}
                                                className={`shadow-xl bg-${color}-500 hover:bg-${color}-900 hover:text-${color}-300 text-white block px-3 py-2 mx-1 mt-2 rounded-md text-base font-medium`}>
                                                <code>{color}</code>
                                            </button>
                                        ))}
                                        <button
                                            className="block px-3 py-2 mx-2 mt-4 text-base font-medium border border-black border-solid rounded-md dark:text-white"
                                            onClick={() => dispatch(toggle())}>
                                            See colors in {isDark ? "light" : "dark"} mode
                                        </button>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                                    <button
                                        className={`text-${color}-500 bg-gray-700 font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        onClick={() => setShowColorModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
            <nav className={`mb-4 bg-${color}-300 shadow-md dark:bg-gray-900`}>
                {/* Adapted from the TailwindUI example nav */}
                {/* https://tailwindui.com/components/application-ui/navigation/navbars */}
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                onClick={() => setOpenMenu(!openMenu)}
                                type="button"
                                className={`inline-flex items-center justify-center p-2 text-${color}-400 rounded-md hover:text-${color}-100 hover:bg-${color}-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${color}-500`}
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed. Heroicon name: outline/menu. Menu open: "hidden", Menu closed: "block" */}
                                <svg
                                    className={`block w-6 h-6 text-2xl text-${color}-900 hover:text-${color}-900`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                            <div className="flex items-center flex-shrink-0">
                                <div className={`flex w-auto h-8 text-3xl text-${color}-900 lg:hidden`}>
                                    <AiOutlineCode />
                                    <span className="pb-2 pl-1 text-2xl md:pb-1">@atlc</span>
                                </div>
                                <div className={`items-center hidden w-auto h-8 text-4xl text-${color}-900 lg:flex`}>
                                    <AiOutlineCode />
                                    <span className="pb-2 pl-1 text-2xl md:pb-1">@atlc</span>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {links.map(({ path, text }, index) => (
                                        <Link key={`nav-link-${index}`} href={path}>
                                            <button className={path === pathname ? activeButtonClasses : standardButtonClasses}>
                                                {text}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`flex text-2xl text-${color}-900 dark:text-${color}-500`}>
                            <button onClick={() => setShowColorModal(true)} className="mx-2">
                                <IoMdColorPalette />
                            </button>
                            <button className="mx-2" onClick={() => dispatch(toggle())}>
                                {isDark ? <FiMoon /> : <FiSun />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {openMenu && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map(({ path, text }, index) => (
                                <Link key={`nav-link-${index}`} href={path}>
                                    <button
                                        onClick={() => setOpenMenu(false)}
                                        className={path === pathname ? mobileActiveButtonClasses : mobileButtonClasses}>
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
