export default function LanguagesComponents() {
    return (
        <div className="languages">
            <dl className="row">

                {/* Espanhol */}
                <dt className="col-sm-3 fw-bold">
                    Espanhol
                </dt>
                <dd className="col-sm-9">
                    <ul className="small mb-0 ps-3">
                        <li>Leitura: fluente</li>
                        <li>Escrita: intermediária</li>
                        <li>Conversação: intermediária</li>
                    </ul>
                </dd>

                {/* Inglês */}
                <dt className="col-sm-3 fw-bold">
                    Inglês
                </dt>
                <dd className="col-sm-9">
                    <ul className="small mb-0 ps-3">
                        <li>Leitura: intermediária</li>
                        <li>Escrita: iniciante</li>
                        <li>Conversação: intermediária</li>
                    </ul>
                </dd>

                {/* Japonês */}
                <dt className="col-sm-3">
                    Japonês
                </dt>
                <dd className="col-sm-9">
                    <ul className="small mb-0 ps-3">
                        <li>Leitura: iniciante</li>
                        <li>Escrita: iniciante</li>
                        <li>Conversação: intermediária</li>
                    </ul>
                </dd>

            </dl>
        </div>
    );
}