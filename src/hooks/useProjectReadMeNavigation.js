import { useNavigate } from "react-router-dom";

export function useProjectNavigation() {
    const navigate = useNavigate();

    const handleViewRepoDetails = (repoName) => {
        navigate("/readme", { state: { repoName } });
    };

    return { handleViewRepoDetails };
}