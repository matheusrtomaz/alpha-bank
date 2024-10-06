import '../css/banner.css';

function Banner() {
    return (
      <section className="banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h2>
              Nós nos preocupamos com<br />
              sua experiência bancária
            </h2>
            <p>
              Encontre soluções e serviços que facilitam o seu dia a dia.
            </p>
            <a href="produtos.html" className="btn1">Vem ser Alpha</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Banner;
  