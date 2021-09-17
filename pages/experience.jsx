import Layout from "../components/Layout";
import { GiAtom } from "react-icons/gi";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";

const postitions = [
    {
        title: "Instructor",
        employer: "Covalence",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Instructor2",
        employer: "Covalence2",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Instructor2",
        employer: "Covalence2",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Instructor2",
        employer: "Covalence2",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />
    },
    {
        title: "Instructor2",
        employer: "Covalence2",
        description:
            "Taught students in our online full-stack bootcamp in day-to-day classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord.",
        dates: "November 2020 - Present",
        link: "https://covalence.io/",
        icon: <GiAtom />
    }
];

const Experience = () => {
    return (
        <Layout>
            <CardContainer>
                {postitions.map(({ title, employer, dates, description }, index) => (
                    <Card key={`experience-card-${index}`} header={employer} subheader={title} body={description} sub_body={dates} />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default Experience;
