import { useEffect } from "react";

import LanguagesComponent from "../../components/LanguagesComponents/index.jsx";
import MyHobbiesComponent from "../../components/MyHobbiesComponent/index.jsx";
import ProfessionalExpirience from "../../components/ProfessionalExpirienceComponent/index.jsx";
import StacksComponent from "../../components/StacksComponent/index.jsx";
import AcademicExpirienceComponent from "../../components/AcademicExpirienceComponent/index.jsx";
import AnotherCoursesComponent from "../../components/AnotherCoursesComponent/index.jsx";

import "./styles.css";

export default function CurriculumPage() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-element");
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll(".hidden-element");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="curriculum-container container my-5">
            <section className="hidden-element py-5 text-center">
                <h1 className="display-3 fw-bold">Lorran Nazareth</h1>
                <p className="lead">Full Stack Developer</p>
            </section>

            <section className="hidden-element py-5 border-top text-center">
                <h2 className="mb-4">Minhas Stacks</h2>
                <StacksComponent />
            </section>

            <section className="hidden-element py-5 border-top text-start">
                <h2 className="mb-4">Experiência Profissional</h2>
                <ProfessionalExpirience />
            </section>

            <section className="hidden-element py-5 border-top text-start">
                <h2 className="mb-4">Formação Acadêmica</h2>
                <AcademicExpirienceComponent />
            </section>

            <section className="hidden-element py-5 border-top text-start">
                <h2 className="mb-4">Outros Cursos</h2>
                <AnotherCoursesComponent />
            </section>

            <section className="hidden-element py-5 border-top text-start">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-center mb-3">Idiomas</h2>
                        <LanguagesComponent />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center mb-3">Meus hobbies</h2>
                        <MyHobbiesComponent />
                    </div>
                </div>
            </section>
        </div>
    )
}