import logo from '../img/logo-branca.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" id="header">
        <a id="header-img" className="navbar-brand" href="index.html">
          <img src={logo} width="46px" alt="Logo" /> Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" id="nav-item-home">
              <a id="header" className="nav-link active" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="cadastro.html">
                Cadastro
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produtos
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="comidas.html">Comidas</a></li>
                <li><a className="dropdown-item" href="bebidas.html">Bebidas</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="produtos.html">Ver todos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sobre.html">Sobre</a>
            </li>
            <li className="nav-item" id="nav-item-adc">
              <a className="nav-link" href="sobre.html">Área do Cliente</a>
            </li>
          </ul>
          <form className="d-flex" id="contact" role="search">
            <input className="form-control me-2" type="search" placeholder="Procurar" aria-label="Search" />
            <button className="btn" type="submit">Procurar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
