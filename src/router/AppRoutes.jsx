import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/index.jsx";
import ProjectsListPage from "../pages/ProjectsListPage/index.jsx";
import ProjectReadMePage from "../pages/ProjectReadMePage/index.jsx";
import CurriculumPage from "../pages/CurriculumPage/index.jsx";
import ContactPage from "../pages/ContactPage/index.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjectsListPage />} />
            <Route path="/readme" element={<ProjectReadMePage />} />
            <Route path="/curriculo" element={<CurriculumPage />} />
        </Routes>
    )
}