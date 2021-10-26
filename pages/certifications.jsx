import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { selectColor } from "../store/reducers";

const certifications = () => {
    const color = useSelector(selectColor);
    const certs = [
        {
            title: "Microsoft Certified: Azure Fundamentals",
            license: "",
            verification_link: "https://www.youracclaim.com/badges/7a047bb7-b2eb-4df2-88b0-cf1d6459f7c1"
        },
        {
            title: "MTA: Software Development Fundamentals",
            license: "",
            verification_link: "https://www.youracclaim.com/badges/2bdeff35-cf12-4228-af03-e3485a0c60d8"
        },
        {
            title: "MTA: Database Fundamentals",
            license: "",
            verification_link: "https://www.youracclaim.com/badges/ddfa48f5-981f-445c-a16b-0adfecd18f6d"
        },
        {
            title: "MTA: Security Fundamentals",
            license: "",
            verification_link: "https://www.youracclaim.com/badges/91a09b81-4a76-448a-be2c-7ea49551e31b"
        },
        {
            title: "CompTIA Healthcare IT Technician",
            license: "CTJDLDWN2KVEK52F",
            verification_link: "https://www.certmetrics.com/comptia/public/verification.aspx"
        }
    ];

    return (
        <Layout>
            <CardContainer>
                {certs.map(cert => (
                    <Card
                        key={`cert-${cert.title}`}
                        header={cert.title}
                        subheader={
                            cert.license ? (
                                <div>
                                    <p>License: {cert.license}</p>
                                    <p>
                                        <a className="font-medium underline" href={cert.verification_link}>
                                            Verify License Here
                                        </a>
                                    </p>
                                </div>
                            ) : (
                                <a className="font-medium underline" href={cert.verification_link}>
                                    Verification Link
                                </a>
                            )
                        }
                    />
                ))}
            </CardContainer>
        </Layout>
    );
};

export default certifications;
