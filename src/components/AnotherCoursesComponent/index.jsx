export default function AnotherCoursesComponent() {
    return (
        <div className="another-courses">
            <dl className="row">

                {/* AWS */}
                <dt className="col-sm-3 fw-semibold">
                    jan/2026
                </dt>
                <dd className="col-sm-9 mb-4">
                    <h5 className="mb-1 fw-bold">
                        AWS Cloud Practitioner Essentials
                    </h5>
                    <p className="mb-0">
                        Capacitação em noções básicas do ecossistema AWS, abordando temas como instâncias AWS,
                        serviços de rede, segurança, armazenamento, modelo de responsabilidade compartilhada
                        da AWS e infraestrutura da Amazon Web Services.
                    </p>
                </dd>

                {/* Meutudo */}
                <dt className="col-sm-3 fw-semibold">
                    ago/2025 – out/2025
                </dt>
                <dd className="col-sm-9 mb-4">
                    <h5 className="mb-1 fw-bold">
                        Meutudo – Mobile Developer
                    </h5>
                    <p className="mb-0">
                        Capacitação para construção de API’s com Node.JS e TypeScript, e aplicações mobile
                        com React Native e Expo Go.
                    </p>
                </dd>

                {/* ONE */}
                <dt className="col-sm-3 fw-semibold">
                    ago/2024 – jan/2025
                </dt>
                <dd className="col-sm-9 mb-4">
                    <h5 className="mb-1 fw-bold">
                        ONE – Oracle Next Education – trilha de especialização em Java com Spring Boot
                    </h5>
                    <p className="mb-0">
                        Aprendizagem profunda em Java. Desde princípios da orientação a objetos, modelagem
                        de dados ao uso da JPA para persistência de dados, uso do Maven para injeção de
                        dependências ao projeto, consumo de API’s, boas práticas de segurança em códigos
                        até o desenvolvimento de API’s Rest.
                    </p>
                </dd>

                {/* SQL Avançado */}
                <dt className="col-sm-3 fw-semibold">
                    jan/2025
                </dt>
                <dd className="col-sm-9 mb-4">
                    <h5 className="mb-0 fw-bold">
                        Consultas SQL: avançando no SQL com MySQL
                    </h5>
                </dd>

                {/* SQL Básico */}
                <dt className="col-sm-3 fw-semibold">
                    jan/2025
                </dt>
                <dd className="col-sm-9">
                    <h5 className="mb-0 fw-bold">
                        SQL com MySQL: manipule e consulte dados
                    </h5>
                </dd>

            </dl>
        </div>
    );
}