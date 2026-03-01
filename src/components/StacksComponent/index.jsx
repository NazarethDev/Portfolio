import javaIcon from "../../assets/java.svg";
import nodeIcon from "../../assets/nodejs.svg";
import reactIcon from "../../assets/react.svg";
import springIcon from "../../assets/spring.svg";

export default function StacksComponent() {
    return (
        <div className="container">
            <div className="row justify-content-center text-center g-4">

                {/* Java */}
                <div className="col-12 col-md-3">
                    <img src={javaIcon} alt="Java" className="img-fluid stack-icon mb-2" />
                    <p className=" fs-3 fw-semibold mb-1">Java</p>
                    <p className="small text-muted mb-0">
                        Backend robusto com Maven, Spring, Auth0, Flyway e MySQL.
                    </p>
                </div>

                {/* Node */}
                <div className="col-12 col-md-3">
                    <img src={nodeIcon} alt="Node.js" className="img-fluid stack-icon mb-2" />
                    <p className="fs-3 fw-semibold mb-1">Node.js</p>
                    <p className="small text-muted mb-0">
                        APIs com Express e TypeScript, além de uso com o MongoDB.
                    </p>
                </div>

                {/* React */}
                <div className="col-12 col-md-3">
                    <img src={reactIcon} alt="React" className="img-fluid stack-icon mb-2" />
                    <p className="fs-3 fw-semibold mb-1">React</p>
                    <p className="small text-muted mb-0">
                        Interfaces modernas e responsivas, além de desenvolvimento mobile com React-Native.
                    </p>
                </div>

                {/* Spring */}
                <div className="col-12 col-md-3">
                    <img src={springIcon} alt="Spring" className="img-fluid stack-icon mb-2" />
                    <p className="fs-3 fw-semibold mb-1">Spring Boot</p>
                    <p className="small text-muted mb-0">
                        APIs REST seguras e escaláveis com recursos incríveis vindos do ambiente Spring, como o Spring Security e Spring web.
                    </p>
                </div>

            </div>
        </div>
    );
}