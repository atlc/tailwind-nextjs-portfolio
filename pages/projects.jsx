import { MdPhotoCamera } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoNpm } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectColor, selectDarkMode } from "../store/reducers";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import tw_colors from "tailwindcss/colors";

const SwalWRC = withReactContent(Swal);

const LGQuote = ({ children }) => (
    <>
        <span className="text-xl font-bold">"</span>
        <em>{children}</em>
        <span className="text-xl font-bold">"</span>
    </>
);

const Experience = () => {
    const color = useSelector(selectColor);
    const dark = useSelector(selectDarkMode);

    const SwalWithImages = async links => {
        const images = links.map(link => {
            if (link.url.includes("mp4")) {
                return {
                    html: (
                        <video autoPlay loop muted>
                            <source src={link.url} type="video/mp4" />
                        </video>
                    ),
                    text: link.text || ""
                };
            } else {
                return { imageUrl: link.url, text: link.text || "" };
            }
        });

        const queue = SwalWRC.mixin({
            background: dark ? tw_colors.gray[900] : tw_colors[color][100],
            showClass: {
                backdrop: `swal2-noanimation`,
                popup: "",
                icon: ""
            },
            hideClass: {
                popup: ""
            },
            confirmButtonText: "Next Image",
            progressSteps: images.map((item, index) => index + 1)
        });

        for await (const [index, img] of images.entries()) {
            const modal_options = { ...img, currentProgressStep: index };

            if (index === images.length - 1) modal_options.confirmButtonText = "Close";

            await queue.fire(modal_options);
        }
    };

    const projects = [
        {
            title: "Core API",
            description: [
                <p>
                    I created a monolithic API to serve as the backbone of many of my smaller projects, with features like centralized auth.
                    Utilizing a database cluster allows me to have each service operate with its own distinct database, and each new
                    project's backend can be rapidly finished by writing just few routes and queries.
                </p>,

                <div className="flex">Tech stack used: Node.js, Typescript, Express, Passport, MySQL, Mailgun, Heroku, DigitalOcean</div>
            ],
            link: (
                <div className="flex">
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://github.com/atlc/core-api">
                        <span className="flex text-3xl">
                            <AiOutlineGithub />
                        </span>{" "}
                        core-api
                    </a>
                </div>
            )
        },
        {
            title: "Node Modules",
            description: [
                <p>
                    <LGQuote>@atlc/hibp</LGQuote> takes a password and checks it against HaveIBeenPwned's Passwords API. Written in
                    Typescript and definitions are included in the module. No external dependencies.
                </p>,
                <p>
                    <LGQuote>shitpostify</LGQuote> is a goofy project that transforms a string into a randomly-cased string with random
                    emojis at each space. Not sure if there's a practical purpose but the users of its{" "}
                    <a
                        href="https://chrome.google.com/webstore/detail/shitpostify/dojihbiflikelfjnoaljoeiklhgdnijp?hl=en-US"
                        className="font-medium underline"
                        target="_blank">
                        corresponding Chrome Extension
                    </a>{" "}
                    seem to enjoy it! Written in TS with included definitions, & no external dependencies.
                </p>
            ],
            link: (
                <div className="flex">
                    <div className="flex">
                        <a
                            className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                            target="_blank"
                            href="https://www.npmjs.com/package/@atlc/hibp">
                            <span className="flex text-3xl">
                                <IoLogoNpm />
                            </span>{" "}
                            @atlc/hibp
                        </a>
                    </div>
                    <div className="flex">
                        <a
                            className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                            target="_blank"
                            href="https://www.npmjs.com/package/shitpostify">
                            <span className="flex text-3xl">
                                <IoLogoNpm />
                            </span>{" "}
                            shitpostify
                        </a>
                    </div>
                </div>
            )
        },
        {
            title: "Misc Projects",
            description: [
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>Quick Jeopardy</LGQuote>{" "}
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif" },
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png" }
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>Pulls questions and answers from a Jeopardy API and creates a quick and configurable 1-off trivia board.</p>
                </div>,
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>Notes App</LGQuote>
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif" },
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png" }
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>Notes App utilizes my CoreAPI and is a note taking app that supports and renders markdown-capable notes.</p>
                </div>,
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>Kitchen Noodle</LGQuote>
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif" },
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png" }
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>Kitchen Noodle (codename "Ceramic CMS") is a fully-fledged CMS for my partner's antiques sales.</p>
                </div>
            ],
            link: (
                <div className="flex">
                    <div className="flex">
                        <a
                            className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                            target="_blank"
                            href="http://jeopardy.atlc.dev">
                            Quick Jeopardy
                        </a>
                    </div>
                    <div className="flex">
                        <a
                            className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                            target="_blank"
                            href="http://notes.atlc.dev">
                            Notes App
                        </a>
                    </div>
                    <div className="flex">
                        <a
                            className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                            target="_blank"
                            href="http://kitchen.atlc.dev">
                            Kitchen Noodle
                        </a>
                    </div>
                </div>
            )
        },
        {
            title: "Arduino",
            description: [
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>Arduino Smoke Detector</LGQuote>
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif" },
                                    { url: "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png" }
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>
                        I promise that we're using approved smoke/CO detectors in our residence, <em>but</em> I was curious to see how
                        inexpensively and easily a Smoke/CO/Gas detector could produced for, with wide open possibilities for accessibility
                        purposes.
                    </p>
                </div>,
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>The Anglerfish</LGQuote>, Halloween 2018
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([{ url: "https://i.imgur.com/eMRZGFy.mp4" }, { url: "https://i.imgur.com/q9Eytam.mp4" }])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>Had some great collaborative work with my partner for some grotesque anglerfish costumes Halloween 2018.</p>
                </div>,
                <div>
                    <div className="flex">
                        <p className="mr-2">
                            <LGQuote>Arcade Games</LGQuote>, Halloween 2019
                        </p>
                        <button
                            className="text-3xl"
                            onClick={() =>
                                SwalWithImages([
                                    { url: "https://i.imgur.com/mACOiIT.mp4" },
                                    {
                                        url: "https://i.imgur.com/wrDjQLr.jpg",
                                        text: "This was the wiring harness for just the joystick and the two motors."
                                    }
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>
                        Another great collab with my partner. This presented with some interesting engineering challenges on the hardware
                        side due to high power consumption. The claw itself was operational, as were motors to raise/lower it and sweep it
                        side to side, all controlled by the joystick. With the costume as heavy enough as it was, we elected to not have it
                        fully powered on the go.
                    </p>
                </div>
            ],
            link: (
                <div className="flex">
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://github.com/atlc/arduino-smoke-detector">
                        <span className="flex text-3xl">
                            <AiOutlineGithub />
                        </span>{" "}
                        smoke detector
                    </a>
                </div>
            )
        },
        {
            title: "Open-Source Contributions",
            description: [
                <div>
                    <p>
                        <LGQuote>Slate</LGQuote>
                    </p>
                    <p>
                        I found a bug where deeply nested headers in Slate documentation caused HTML to be added to the document title.{" "}
                        Implemented a fix which was merged.
                    </p>
                </div>,
                <div>
                    <p>
                        <LGQuote>Studio Ghibli API</LGQuote>
                    </p>
                    <p>
                        We utilize the Studio Ghibli API for a handful of student lab assignments for Covalence. They had an odd edge case
                        for some of their data turning up null due to how they enumerated object properties. Implemented a fix which was
                        merged.
                    </p>
                </div>,
                <div>
                    <p>
                        <LGQuote>python-roku</LGQuote>
                    </p>
                    <p>
                        I kept losing the remote to my TV, so I solved it the way a developer would solve such an issue - finding a CLI
                        project! The project I found worked great, except for the fact that controls were not iterable. I submitted a PR to
                        allow certain methods to be iterable. Though unmerged, it did generate good discussion and the developer liked the
                        idea.
                    </p>
                </div>
            ]
        }
    ];

    return (
        <Layout>
            <CardContainer>
                {projects.map(({ title, description, link }, index) => (
                    <Card id={title} key={`project-card-${index}`} header={title} bodies={[...description]} second_body={link} />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default Experience;
