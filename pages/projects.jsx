import Image from "next/image";
import { MdPhotoCamera } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectColor } from "../store/reducers";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

    const SwalWithImages = async links => {
        const images = links.map(link => {
            if (link.includes("mp4")) {
                return {
                    html: (
                        <video autoPlay loop muted>
                            <source src={link} type="video/mp4" />
                        </video>
                    )
                };
            } else {
                return { imageUrl: link };
            }
        });

        const queue = SwalWRC.mixin({
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
            if (index === images.length - 1) {
                await queue.fire({ ...img, confirmButtonText: "Close" });
            } else {
                await queue.fire({ ...img, currentProgressStep: index });
            }
        }
    };

    const projects = [
        {
            title: "Core API",
            description: [
                <p>
                    I created a monolith API to serve as the backbone of many of my smaller projects, with features like centralized auth to
                    allow registration of one service be applicable for all services. Utilizing a database cluster allows me to have each
                    service operate with its own distinct database, and each new backend can be rapidly finished by writing just few routes
                    and queries.
                </p>,

                <p>Tech stack used: Node.js, Typescript, Express, Passport, MySQL, Mailgun, Heroku, DigitalOcean</p>
            ],
            link: (
                <a
                    className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                    target="_blank"
                    href="https://github.com/atlc/core-api">
                    core-api
                </a>
            )
        },
        {
            title: "Node Modules",
            description: [
                <p>
                    <LGQuote>@atlc/hibp</LGQuote> takes a password and checks it against HaveIBeenPwned's Passwords API. Returns an object
                    with the status of whether or not that password has been found in a breach, and the number of times. Written in
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
                    seem to enjoy it! Also written in TS with included definitions, & no external dependencies.
                </p>
            ],
            link: (
                <>
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://www.npmjs.com/package/@atlc/hibp">
                        @atlc/hibp
                    </a>
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://www.npmjs.com/package/shitpostify">
                        shitpostify
                    </a>
                </>
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
                                    "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif",
                                    "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png"
                                ])
                            }>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>
                        I promise that we're using approved smoke/CO detectors in our residence. I was curious to see how inexpensively and
                        easily a Smoke/CO/Gas detector could produced for, with wide open possibilities for accessibility purposes.
                    </p>
                </div>,
                <div>
                    <div className="flex">
                        <p className="mr-2">Anglerfish [pics with modal?]</p>
                        <button
                            className="text-3xl"
                            onClick={() => SwalWithImages(["https://i.imgur.com/eMRZGFy.mp4", "https://i.imgur.com/q9Eytam.mp4"])}>
                            <MdPhotoCamera />
                        </button>
                    </div>
                    <p>Arcade games [pics with modal?]</p>
                </div>
            ],
            link: (
                <>
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://github.com/atlc/arduino-smoke-detector">
                        smoke detector
                    </a>
                    <a
                        className={`text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`}
                        target="_blank"
                        href="https://www.npmjs.com/package/shitpostify">
                        shitpostify
                    </a>
                </>
            )
        }
    ];

    return (
        <Layout>
            <CardContainer>
                {projects.map(({ title, description, link }, index) => (
                    <Card key={`project-card-${index}`} header={title} bodies={[...description]} second_body={link} />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default Experience;
