import {
    DEVELOPER_WHATSAPP_LINK,
    DEVELOPER_EMAIL,
    DEVELOPER_LINKEDIN
} from "../../config/appURLs";

import whatsappIcon from "../../assets/whatsapp.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import emailIcon from "../../assets/email.svg";

export default function ContactPage() {
    return (
        <div className="container my-5 mb-3">

            <section className="text-center mb-2">
                <h1 className="fw-bold">Contato</h1>
                <p className="text-muted">
                    Você pode falar comigo ou ver mais sobre meus projetos através de qualquer uma das plataformas abaixo.
                </p>
            </section>

            <div className="row justify-content-center text-center g-4">

                {/* WhatsApp */}
                <div className="col-12 col-md-3">
                    <a
                        href={DEVELOPER_WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-reset"
                    >
                        <img
                            src={whatsappIcon}
                            alt="WhatsApp"
                            className="img-fluid mb-2"
                            style={{ width: "50px" }}
                        />
                        <p className="fw-semibold mb-0">WhatsApp</p>
                    </a>
                </div>


                {/* LinkedIn */}
                <div className="col-12 col-md-3">
                    <a
                        href={DEVELOPER_LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-reset"
                    >
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="img-fluid mb-2"
                            style={{ width: "50px" }}
                        />
                        <p className="fw-semibold mb-0">LinkedIn</p>
                    </a>
                </div>

                {/* Email */}
                <div className="col-12 col-md-3">
                    <a
                        href={`mailto:${DEVELOPER_EMAIL}`}
                        className="text-decoration-none text-reset"
                    >
                        <img
                            src={emailIcon}
                            alt="Email"
                            className="img-fluid mb-2"
                            style={{ width: "50px" }}
                        />
                        <p className="fw-semibold mb-0">Email</p>
                    </a>
                </div>

                {/* GitHub */}
                <div className="col-12 col-md-3">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-reset"
                    >
                        <img
                            src={githubIcon}
                            alt="GitHub"
                            className="img-fluid mb-2"
                            style={{ width: "50px" }}
                        />
                        <p className="fw-semibold mb-0">GitHub</p>
                    </a>
                </div>

            </div>
        </div>
    );
}