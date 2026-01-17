import "./about.scss";

export default function About() {
  return (
    <section className="about pt-80 lg:pt-0">
      <div className="about-container">
        {/* Hero */}
        <header className="about-hero">
          <h1>
            À propos de <span>Gallery App</span>
          </h1>
          <p>
            Une plateforme moderne pour explorer, découvrir et admirer
            des collections visuelles uniques.
          </p>
        </header>

        {/* Mission */}
        <div className="about-section">
          <h2>Notre mission</h2>
          <p>
            Gallery App a été conçue pour offrir une expérience immersive
            autour de l’image. Notre objectif est de mettre en valeur des
            collections exceptionnelles tout en garantissant une navigation
            fluide, rapide et élégante.
          </p>
        </div>

        {/* Values */}
        <div className="about-section">
          <h2>Nos valeurs</h2>
          <ul className="about-values">
            <li>🎨 Créativité et inspiration</li>
            <li>⚡ Performance et fluidité</li>
            <li>🔍 Simplicité et accessibilité</li>
            <li>💡 Innovation continue</li>
          </ul>
        </div>

        {/* Tech */}
        <div className="about-section">
          <h2>Technologies utilisées</h2>
          <p>
            Cette application est développée avec des technologies modernes
            afin de garantir une expérience utilisateur optimale.
          </p>

          <div className="about-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="about-cta">
          <h3>Envie d’en voir plus ?</h3>
          <p>
            Explore notre galerie et découvre des collections uniques
            soigneusement sélectionnées.
          </p>
        </div>
      </div>
    </section>
  );
}
