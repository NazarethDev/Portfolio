export default function ProfessionalExpirience() {
    return (
        <div className="professional-experience">
            <dl className="row">

                {/* Gerente de Operações */}
                <dt className="col-sm-3 fw-semibold">
                    Ago/2025 – Atual
                </dt>
                <dd className="col-sm-9">
                    <h5 className="mb-1 fw-bold">
                        Gerente de Operações
                    </h5>
                    <p className="mb-1 text-muted">
                        Tudão Alimentos
                    </p>
                    <ul className="small mb-0 ps-3">
                        <li>Coordenação de equipe com 5 colaboradores</li>
                        <li>Organização e controle de estoque e loja</li>
                        <li>Supervisão da qualidade no atendimento ao cliente</li>
                        <li>Acompanhamento de metas semanais de faturamento</li>
                        <li>Garantia de eficiência operacional e resultados em vendas</li>
                    </ul>
                </dd>

                {/* Analista Customer Experience */}
                <dt className="col-sm-3 fw-semibold mt-4">
                    jun/2024 – ago/2025
                </dt>
                <dd className="col-sm-9 mt-4">
                    <h5 className="mb-1 fw-bold">
                        Analista Customer Experience Bilíngue
                    </h5>
                    <p className="mb-1 text-muted">
                        Bizay
                    </p>
                    <ul className="small mb-0 ps-3">
                        <li>Atendimento em português e espanhol via e-mail, chat e telefone</li>
                        <li>Suporte a clientes da Espanha, México, Brasil e Portugal</li>
                        <li>Gestão de processos de pré-compra, pedidos e pós-venda</li>
                        <li>Utilização de plataformas como Salesforce e BackOffice</li>
                    </ul>
                </dd>

                {/* Voluntário */}
                <dt className="col-sm-3 fw-semibold mt-4">
                    mar/2022 – abr/2024
                </dt>
                <dd className="col-sm-9 mt-4">
                    <h5 className="mb-1 fw-bold">
                        Voluntário
                    </h5>
                    <p className="mb-1 text-muted">
                        A.B.I.J.C.S.U.D
                    </p>
                    <ul className="small mb-0 ps-3">
                        <li>Treinamento e mentoria de novos membros da equipe</li>
                        <li>Acompanhamento e reporte de progresso</li>
                        <li>Motivação e suporte contínuo à equipe</li>
                        <li>Gestão e execução de processos internos em eventos e reuniões</li>
                    </ul>
                </dd>

            </dl>
        </div>
    );
}