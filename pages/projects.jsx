import Layout from "../components/Layout";
import { GiAtom } from "react-icons/gi";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";

const projects = [
    {
        title: "Project",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Project2",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Node Modules",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Chrome Extensions",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        link: "https://covalence.io/",
        icon: <GiAtom />
    }
];

const Experience = () => {
    return (
        <Layout>
            <CardContainer>
                {projects.map(({ title, description, link }, index) => (
                    <Card key={`project-card-${index}`} header={title} bodies={[description]} second_body={link} />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default Experience;
