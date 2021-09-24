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

    const standardButtonClasses = `text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-medium`;

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
                                <button className={standardButtonClasses}>Experience</button>
                            </Link>
                            <Link href="/projects">
                                <button className={standardButtonClasses}>Projects</button>
                            </Link>
                        </>,
                        2
                    ).then(() => dispatch(check_in()))
            )
        );
    }, []);

    return (
        <Layout>
            {text.map((paragraph, index) => (
                <div key={`intro-text-paragraph-${index}`} className="flex items-center">
                    <div className={`mx-auto p-5 text-center text-${color}-800 dark:text-${color}-300 text-lg md:text-2xl`}>
                        {paragraph}
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default Home;
