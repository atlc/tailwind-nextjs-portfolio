import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import { selectColor } from "../store/reducers";
import { useSelector } from "react-redux";

const LGQuote = ({ children }) => (
    <>
        <span className="text-xl font-bold">"</span>
        <em>{children}</em>
        <span className="text-xl font-bold">"</span>
    </>
);

const Experience = () => {
    const color = useSelector(selectColor);

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
                    <p>Smoke Detector</p>
                    <p>Anglerfish [pics with modal?]</p>
                    <p>Arcade games [pics with modal?]</p>
                </div>
            ],
            link: "https://covalence.io/"
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
