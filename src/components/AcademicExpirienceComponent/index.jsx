export default function AcademicExpirienceComponent() {
    return (
        <div className="academic-experience">
            <dl className="row">

                {/* ADS - Fatec */}
                <dt className="col-sm-3 fw-semibold">
                    2025 – Atual
                </dt>
                <dd className="col-sm-9">
                    <h5 className="mb-1 fw-bold">
                        Análise e Desenvolvimento de Sistemas
                    </h5>
                    <p className="mb-1 text-muted">
                        Fatec de São Paulo
                    </p>
                    <p className="mb-0">
                        Período noturno • Cursando
                    </p>
                </dd>

                {/* Técnico em Contabilidade */}
                <dt className="col-sm-3 fw-semibold">
                    2020 – 2021
                </dt>
                <dd className="col-sm-9">
                    <h5 className="mb-1 fw-bold">
                        Técnico em Contabilidade
                    </h5>
                    <p className="mb-1 text-muted">
                        Etec de Itaquera
                    </p>
                    <p className="mb-0 text-muted">
                        Formação técnica
                    </p>
                </dd>

            </dl>
        </div>
    );
}