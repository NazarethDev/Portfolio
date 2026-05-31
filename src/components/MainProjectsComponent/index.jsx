import { useProjectNavigation } from "../../hooks/useProjectReadMeNavigation";


export default function MainProjectsComponent() {
    const { handleViewRepoDetails } = useProjectNavigation();
    return (
        <div className="row align-items-center gy-4 g-5">

            <div className="col-md-4">
                <p className="fs-4 lead">Simple Multi Stock</p>
                <p className="fs-5 text-start">Um projeto full stack com frontend em React com estilização utilizando Bootstrap, backend com node em conexão com um banco de dados não relacional MongoDB.</p>
                <p className="fs-6 text-start">Atende ao problema real de uma pequena rede de varejo local, lidando com a gestão de um estoque distribuido entre as diferentes instalações do empreendimento. Desenvolvido com uma arquitetura levando em consideração a escalabilidade e proporções que o negocio, ainda em crescimento, terá no futuro breve.</p>
                <button
                    className="btn btn-outline-light px-5 mt-2 fw-semibold"
                    onClick={() => handleViewRepoDetails("Simple-multi-stock-frontend")}
                >
                    VER DETALHES
                </button>
            </div>
            <div className="col-md-4">
                <p className="fs-4 lead">Payment Assistent</p>
                <p className="fs-5 text-start">Projeto full stack, com backend robusto em Java com Spring, conectado ao MySQL. Frontend elaborado com React e Bootstrap.</p>
                <p className="fs-6 text-start">Gerenciador de boletos. Realiza um CRUD completo em registros no banco de dados, e busca dados de maneira inteligente usando regras de negócio da organização para a qual o projeto foi solicitado, além de gerar um simples relatório em PDF com as contas a pagar dentro do dia atual. A arquitetura empregada em seu desenvolvimento ainda permite mais flexibilidade para tratamento de dados e entrega de relatórios, de acordo com o solicitado pelo cliente.</p>
                <button
                    className="btn btn-outline-light px-5 mt-2 fw-semibold"
                    onClick={() => handleViewRepoDetails("payment-assistent-frontend")}
                >
                    VER DETALHES
                </button>
            </div>
            <div className="col-md-4">
                <p className="fs-4 lead">Forum Hub</p>
                <p className="fs-5 text-start">Projeto backend, utilizando de Java com Spring e MySQL.</p>
                <p className="fs-6 text-start">Criado como projeto final proposto pelo projeto Oracle Next Education, representa uma API Rest que suporta a criação de diferentes usuários, onde cada qual pode realizar postagens sobre diferentes tópicos, comentar conteúdo publicado, além de gerenciar suas próprias publicações, e da atualização de status de cada uma delas.</p>
                <button
                    className="btn btn-outline-light px-5 mt-2 fw-semibold"
                    onClick={() => handleViewRepoDetails("Forum-Hub")}
                >
                    VER DETALHES
                </button>
            </div>
        </div>
    )
}