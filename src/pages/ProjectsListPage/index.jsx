import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gitHubService } from "../../services/gitHubAPIService.js";

export default function ProjectsListPage() {
    const [projectsList, setProjectsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleViewDetails = (repoName) => {
        navigate("/readme", { state: { repoName } });
    };

    async function fetchRepoList() {
        try {
            setLoading(true);
            const data = await gitHubService('', false);

            const simplifiedData = data.map((project) => ({
                id: project.id,
                name: project.name,
                description: project.description,
                language: project.language
            }));

            setProjectsList(simplifiedData);
        } catch (err) {
            setError("Não foi possível carregar a lista de projetos do GitHub");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepoList();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-outline-light text-white border-white role='alert' m-5 bg-transparent">{error}</div>;
    }

    return (
        <div className="container my-5 text-white">
            <h2 className="mb-5 text-center fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
                Meus Projetos
            </h2>
            
            <div className="projects-list">
                {projectsList.map((project) => (
                    <div key={project.id} className="project-item py-5 text-center">
                        <div className="mx-auto" style={{ maxWidth: '800px' }}>
                            {/* Título em Branco */}
                            <h3 className="fw-bold mb-3 text-white">
                                {project.name.replace(/-/g, ' ')}
                            </h3>
                            
                            {/* Descrição em Cinza Claro */}
                            <p style={{ color: '#adb5bd' }} className="mb-3">
                                {project.description || "Sem descrição disponível no GitHub."}
                            </p>

                            {/* Linguagem e Botão Centralizados */}
                            <div className="d-flex flex-column align-items-center gap-3">
                                {project.language && (
                                    <span className="badge border border-white text-white bg-transparent rounded-pill px-3 py-2">
                                        {project.language}
                                    </span>
                                )}
                                
                                <button 
                                    className="btn btn-outline-light px-5 mt-2 fw-semibold"
                                    onClick={() => handleViewDetails(project.name)}
                                    //style={{ borderRadius: '0' }} // Estilo minimalista quadrad*
                                >
                                    VER DETALHES
                                </button>
                            </div>
                        </div>
                        
                        {/* Linha Divisória em Branco com opacidade baixa */}
                        <hr className="mt-5 border-white opacity-25 mx-auto" style={{ width: '60%' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}