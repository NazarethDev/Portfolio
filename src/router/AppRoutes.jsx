import { Route, Routes } from "react-router-dom";

import ProjectsListPage from "../pages/ProjectsListPage/index.jsx";
import ProjectReadMePage from "../pages/ProjectReadMePage/index.jsx";
import CurriculumPage from "../pages/CurriculumPage/index.jsx";
import ContactPage from "../pages/ContactPage/index.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CurriculumPage />} />
            <Route path="/projetos" element={<ProjectsListPage />} />
            <Route path="/readme" element={<ProjectReadMePage />} />
            <Route path="/contato" element={<ContactPage />} />

        </Routes>
    )
}