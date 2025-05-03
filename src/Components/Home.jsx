import "../styles/Home.css";

function Home() {
  return (
    <>
      <header className="home__header">
        <img
          className="home__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokédex Logo"
        />

        <div className="home__container">
          <p className="home__text">A sua Pokédex virtual!</p>
        </div>
      </header>
      <section className="poke__intro">
        <img src="/img/Pokemon-no-google.png" alt="Poke Intro" />
      </section>
    </>
  );
}

export default Home;
