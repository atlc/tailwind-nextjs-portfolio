import Layout from "../components/Layout";
import { GiAtom } from "react-icons/gi";

const postitions = [
    {
        title: "Instructor",
        employer: "Covalence",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />,
    },
];

const Experience = () => {
    return (
        <Layout>
            <div className="d-flex align-items-center vh-100">
                {postitions.map(({ title, employer, dates, description, icon }, index) => (
                    <div className="card bg-white shadow" key={`experience-card-${index}`}>
                        <div className="card-header bg-white d-flex justify-content-center">
                            <div>
                                {employer} {icon}
                            </div>
                            <div>
                                <em>{title}</em>
                            </div>
                        </div>
                        <div className="card-body">{description}</div>
                        <div className="card-footer bg-white d-flex justify-content-center">
                            <p className="text-muted">{dates}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Experience;
