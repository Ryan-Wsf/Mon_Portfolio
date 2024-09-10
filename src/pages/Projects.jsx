import { Link } from "react-router-dom";
import Footer from '../component/footer';
import Header from '../component/header';
import '../styles/style.css';

export default function Projects() {
    return(
        <>
            <Header />
                <main className="container">
                    <section className="section_projects">
                        <h2>Projets</h2>
                        <div className="div_projects">
                            <article className="border_projects">
                                <img src="/img/John_Doe_Capture.png" alt="img" />
                                <div className="div_articles_projects">
                                    <h3>Projet John Doe</h3>
                                    <p>Conception d'un portfolio virtuel</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                            <article className="border_projects">
                                <img src="/img/GeniArtHub.png" alt="img" />
                                <div className="div_articles_projects">
                                    <h3>Projet GeniArtHub</h3>
                                    <p>Conception d'un site e-commerce</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                            <article className="border_projects">
                                <img src="/img/Oraculus.png" alt="img" />
                                <div  className="div_articles_projects">
                                    <h3>Projet Oraculus</h3>
                                    <p>Conception d'un site d'horoscope</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                            <article className="border_projects">
                                <img src="/img/Home_Key.png" alt="img" />
                                <div className="div_articles_projects">
                                    <h3>Projet Home_Key</h3>
                                    <p>Intégration d'un site web</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                            <article className="border_projects">
                                <img src="/img/Nomade.png" alt="img" />
                                <div className="div_articles_projects">
                                    <h3>Projet Nomade</h3>
                                    <p>Intégration d'un site web</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                            <article className="border_projects">
                                <img src="/img/Digital.png" alt="img" />
                                <div className="div_articles_projects">
                                    <h3>Projet Digital</h3>
                                    <p>Intégration d'un site web</p>
                                    <Link className="link_articles_projects" to="#">En savoir plus</Link>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    )
}
