import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <header className="py-4">
            <div className="container text-center">
                <div className="btn-group" role="group">

                    <NavLink
                        to="/curriculo"
                        className={({ isActive }) =>
                            `btn ${isActive ? "btn-light text-dark fw-semibold" : "btn-outline-light"}`
                        }
                    >
                        Currículo
                    </NavLink>

                    <NavLink
                        to="/projetos"
                        className={({ isActive }) =>
                            `btn ${isActive ? "btn-light text-dark fw-semibold" : "btn-outline-light"}`
                        }
                    >
                        Portfólio
                    </NavLink>

                </div>
            </div>
        </header>
    );
}