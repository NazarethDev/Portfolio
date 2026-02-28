import { gitHubService } from "./gitHubAPIService.js"

export async function markdownConversor(repoName) {
    try {
        const data = await gitHubService(repoName, true)

        if (data?.encoding === 'base64' && data.content) {
            const markdown = decodeURIComponent(
                escape(window.atob(data.content))
            )

            return markdown
        }

        return 'Readme não encontrado ou formato de resposta da API inválido.'
    } catch (error) {
        console.error('Erro em markdownConversor:', error)
        return 'Erro ao converter o Readme, ou o repositório não possui um no momento.'
    }
}