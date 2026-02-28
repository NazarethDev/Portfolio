import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import "./styles.css";
import { markdownConversor } from "../../services/markdownConversor";

export default function ProjectReadMePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [readme, setReadme] = useState("");
    const [loading, setLoading] = useState(true);

    const repoName = location.state?.repoName;

    async function loadReadme() {
        try {
            const content = await markdownConversor(repoName);
            setReadme(content);
        } catch (error) {
            setReadme("Erro ao carregar o conteúdo");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!repoName) {
            navigate("/repositorio-github");
            return;
        }
        loadReadme();
    }, [repoName, navigate]);

    if (loading) return (
        <div className="text-center my-5">
            {/* Spinner agora é 'light' para aparecer no fundo escuro */}
            <div className="spinner-border text-light" />
        </div>
    );

    return (
        <div className="container my-5 text-white">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    {/* Botão minimalista seguindo o padrão da lista */}
                    <button 
                        className="btn btn-outline-light mb-5" 
                        onClick={() => navigate(-1)}
                        style={{ borderRadius: '0', letterSpacing: '1px' }}
                    >
                        ← VOLTAR
                    </button>

                    <header className="mb-5 border-bottom border-secondary pb-3">
                        <h2 className="fw-bold text-uppercase">{repoName.replace(/-/g, ' ')}</h2>
                    </header>

                    {/* Conteúdo do Markdown direto no fundo da página */}
                    <div className="markdown-render">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}