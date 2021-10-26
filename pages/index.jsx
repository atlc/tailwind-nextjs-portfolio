import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { check_in, selectColor, selectDarkMode, selectHasVisited } from "../store/reducers";

const Home = () => {
    const [text, setText] = useState(["Hey, I'm Andrew Cartwright, a software developer and instructor."]);
    const color = useSelector(selectColor);
    const isDark = useSelector(selectDarkMode);
    const dispatch = useDispatch();
    const visit_multiplier = useSelector(selectHasVisited) ? 0 : 1;

    const button_style = {
        lg: `text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`,
        sm: `text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 p-1 mx-1 rounded-md text-sm font-light`
    };

    let array_to_get_around_batched_updates = [...text];

    const create_delay = (delayed_text, seconds) => {
        array_to_get_around_batched_updates = [...array_to_get_around_batched_updates, delayed_text];
        return new Promise(resolve => {
            setTimeout(() => {
                setText(array_to_get_around_batched_updates);
                resolve("done");
            }, seconds * 1000 * visit_multiplier);
        });
    };

    useEffect(() => {
        // Initial condition before the reducer controls this
        if (isDark == true) {
            document.body.classList.add("dark");
            document.body.classList.add("bg-gray-800");
        }

        create_delay("I like to create stuff and learn new things.", 1.75).then(() =>
            create_delay("If you want to read more about me, check out my experience page or check out some projects I've done.", 2).then(
                () =>
                    create_delay(
                        <>
                            <Link href="/experience">
                                <button className={button_style.lg}>Experience</button>
                            </Link>
                            <Link href="/projects">
                                <button className={button_style.lg}>Projects</button>
                            </Link>
                        </>,
                        2
                    ).then(() => dispatch(check_in()))
            )
        );
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex-grow">
                <Layout className="-mb-20">
                    <div className="mt-10">
                        {text.map((paragraph, index) => (
                            <div key={`intro-text-paragraph-${index}`} className="flex items-center">
                                <div
                                    className={`mx-auto px-5 py-2 text-center text-${color}-800 dark:text-${color}-300 font-light text-lg md:text-2xl`}>
                                    {paragraph}
                                </div>
                            </div>
                        ))}
                    </div>
                </Layout>
            </div>
            <footer className="flex items-center px-3 -mt-20 md:px-20">
                <p
                    className={`-mt-20 leading-7 md:leading-10 mx-auto text-center text-${color}-800 dark:text-${color}-300 font-light text-xs md:text-lg lg:text-xl`}>
                    This site was built utilizing{" "}
                    <a className={button_style.sm} href="https://nextjs.org/">
                        Next.js
                    </a>
                    , styled with
                    <a className={button_style.sm} href="https://tailwindcss.com/">
                        Tailwind CSS
                    </a>
                    , and the color theme and other global settings were managed with{" "}
                    <a className={button_style.sm} href="https://react-redux.js.org/">
                        Redux
                    </a>{" "}
                    (formerly with the{" "}
                    <a
                        className={`font-mono text-sm md:text-lg px-1 rounded-md bg-gray-700 text-${color}-300 dark:bg-gray-600 dark:text-${color}-300`}
                        href="https://reactjs.org/docs/hooks-reference.html#usecontext">
                        useContext
                    </a>{" "}
                    +{" "}
                    <a
                        className={`font-mono text-sm md:text-lg px-1 rounded-md bg-gray-700 text-${color}-300 dark:bg-gray-600 dark:text-${color}-300`}
                        href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                        useReducer
                    </a>{" "}
                    hooks).
                </p>
            </footer>
        </div>
    );
};

export default Home;
