import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import { selectColor } from "../store/reducers";
import { useSelector } from "react-redux";

const Experience = () => {
    const color = useSelector(selectColor);

    const button_style = {
        lg: `text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 px-3 mx-2 py-2 rounded-md text-md font-light`,
        sm: `text-gray-100 shadow-xl bg-${color}-600 hover:bg-${color}-300 hover:text-${color}-700 p-1 mx-1 rounded-md text-base font-light`
    };

    const postitions = [
        {
            employer: "Covalence.io",
            position: "Instructor",
            description:
                "Taught students of our immersive full-stack online bootcamp in daily classes, performed video code reviews for student lab submissions, and provided community support to our part time students via Discord. \n The curriculum encompases general frontend fundamentals (HTML, CSS, JS), React (with TypeScript), Node (with TypeScript, Express, MySQL, Passport) ",
            dates: "2020 - Present"
        },
        {
            position: "Devops Engineer; Application Systems Analyst",
            employer: "Hubbard Systems",
            description: `As the Devops Engineer, I spearheaded the founding of our Devops processes, automating and improving internal processes where needed. I created a CI/CD pipeline with Jenkins to build and deploy our application with a COBOL backend paired with a React & Electron client. I also created an API documentation system using SlateDocs, and wrote a Chrome extension that parsed our source code or JSON responses to create a markdown table describing that endpoint for our API documentation.\n I set up a Chocolatey server where our CI/CD process automatically packaged everything for deployment to clients, and created a Powershell script for configuring clients' servers to manage all the Chocolatey packages in addition to setting system-wide configurations to automate client installs. Also created a tool with Node to generate millions of records to create a sterile dataset for our new application. \n As an ASA, I trained and assisted clients in daily usage of our accounting application. Outside of application support, I was involved with SQL Server, Windows & Linux server administration.`,
            dates: "2019-2020; 2015-2016"
        },
        {
            position: "Software Developer",
            employer: "Vincari",
            description:
                "Created new features and fixed existing bugs for EMR/Operative documentation webapp on a stack of Ruby on Rails, Angular.js, and MySQL. Worked on infrastructure within AWS, primarily in EC2, VPCs, and with S3. Created a logging/analytics framework using SumoLogic in order to give our Implementation & Support teams a tool with which they could easily assist clients.",
            dates: "2016-2017"
        }
    ];

    return (
        <Layout>
            <CardContainer>
                {postitions.map(({ employer, position, dates, description, link }, index) => (
                    <Card
                        key={`experience-card-${index}`}
                        header={employer}
                        subheader={position}
                        bodies={[...description.split("\n")]}
                        sub_body={dates}
                        second_sub_body={link}
                    />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default Experience;
