import { Link } from "react-router-dom";
import Footer from '../component/footer';
import Header from '../component/header';
import projects_data from '/data/projects_data.json'; 
import '../styles/style.css';

export default function Home() {
    return (
        <>
            <Header />
                <main className="container">
                    <section className="section1">
                        <h1 className="h1">Ryan Wassouf</h1>
                        <h2>Développeur Web & Mobile Junior</h2>
                        <p>Actuellement en formation pour devenir développeur web et mobile, je suis passionné par la création de solutions numériques modernes et efficaces. En tant que développeur junior, je m'efforce d'appliquer mes compétences techniques et ma curiosité pour développer des projets concrets tout en continuant d'apprendre et d'évoluer dans cet environnement en constante évolution.</p>
                    </section>
                    <hr className="hr"/>
                    <section className="section_skills">
                        <h2>Compétences</h2>
                        <div className="div_skills">
                            <div className="border_skills">
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Git</li>
                                    <li>PhpMyAdmin</li>
                                    <li>SQL</li>
                                    <li>PHP</li>
                                    <li>Express.js</li>
                                    <li>UX/UI Design</li>
                                </ul>
                            </div>
                            <div className="border_skills">
                                <ul >
                                    <li>Figma</li>
                                    <li>Trello</li>
                                    <li>Wordpress</li>
                                    <li>Canva</li>
                                    <li>ChatGPT</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <hr className="hr"/>
                    <section className="section_projects">
                        <div className="div_title_projects">
                            <h2>Projets</h2>
                            <Link className="link_articles_projects" to="#">Voir plus de projets</Link>
                        </div>
                        <div className="div_projects">
                            {projects_data.slice(0, 3).map(project => ( 
                            <article className="border_projects" key={project.id}>
                                <img src={project.image} alt={project.title} />
                                <div className="div_articles_projects">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link className="link_articles_projects" to={project.link}>
                                    En savoir plus
                                </Link>
                                </div>
                            </article>
                            ))}
                        </div>
                    </section>
                    <hr className="hr"/>
                    <section className="section_contact">
                        <h2>Contact</h2>
                        <form>
                            <label htmlFor="name">Nom</label>
                            <input type="text" placeholder="Entrez votre Nom" id="name" name="name" required/>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Entrez votre Email" id="email" name="email" required/>
                            <label htmlFor="message" >Message</label>
                            <textarea id="message" placeholder="Entrez votre message" name="message" cols="10" rows="10" required></textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </section>
                </main>
            <Footer />
        </>
    )
}