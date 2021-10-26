import Layout from "../components/Layout";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectColor, selectDarkMode } from "../store/reducers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import tw_colors from "tailwindcss/colors";
const SwalWRC = withReactContent(Swal);

const Contact = () => {
    const color = useSelector(selectColor);
    const dark = useSelector(selectDarkMode);

    const Swal_no_animation = SwalWRC.mixin({
        background: dark ? tw_colors.gray[800] : tw_colors[color][100],
        showClass: {
            backdrop: `swal2-noanimation`,
            popup: "",
            icon: ""
        },
        hideClass: {
            popup: ""
        },
        confirmButtonText: "Send email!"
    });

    const SwalEmail = async () => {
        const { value: email } = await Swal_no_animation.fire({
            title: "Send me your contact info!",
            input: "email",
            inputLabel: "Your email:",
            confirmButtonText: "Next",
            inputValidator: value => {
                if (!value) return "You need to provide an email address!";
            }
        });

        if (email) {
            const { value: message } = await Swal_no_animation.fire({
                title: "Thanks for the address!",
                input: "textarea",
                inputLabel: "Message:",
                confirmButtonText: "Next",
                inputPlaceholder: "Please provide a brief message about your inquiry, and I'll get back to you as soon as I can!",
                inputValidator: value => {
                    if (!value) return "Please send a brief message";
                }
            });

            if (message) {
                Swal_no_animation.fire({
                    title: "Ready to send?",
                    text: `I'll be getting back to you at ${email} as soon as I can, thanks!`
                }).then(res => {
                    if (res.isConfirmed) {
                        console.log({ email, message });
                        /** fetch to (api.atlc/contact), change that to not use tokens but instead evaluate req.get('origin')
                         *
                         * if email is not enqueued, send Swal with my email address and maybe a mailto link?
                         */
                    }
                });
            }
        }
    };

    return (
        <Layout>
            <div className={`text-${color}-800 dark:text-${color}-300 font-light mt-20`}>
                <h1 className={`text-5xl text-center font-light`}>Contact Me!</h1>
                <div className="flex justify-center mx-auto mt-20 text-5xl text-center">
                    <a className="mx-auto lg:mx-10" href="https://github.com/atlc" target="_blank">
                        <SiGithub />
                    </a>
                    <a className="mx-auto lg:mx-10" href="https://www.linkedin.com/in/atlc-/" target="_blank">
                        <SiLinkedin />
                    </a>
                    <p className="mx-auto lg:mx-10" onClick={() => SwalEmail()}>
                        <MdEmail />
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
