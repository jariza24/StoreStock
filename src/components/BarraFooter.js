import logoMision from './img/logo-mision.png'

function BarraFooter() {
    return (
        <div class="container pt-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
                <div className="col-md-4 d-flex align-items-center">
                    <a href="https://www.misiontic2022.gov.co/portal/"
                        class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logoMision} className="bi me-2" style={{ width: 40 }} alt="logo de mision" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Universidad Tecnologica de Pereira</span>
                </div>
            </footer>
        </div>
    );
}

export default BarraFooter;