import { Link } from "react-router-dom";
import img_projet1 from "../assets/John_Doe_Capture.png";
import img_projet2 from "../assets/GeniArtHub.png";
import img_projet3 from "../assets/Oraculus.png";

export default function MyComponentHome() {
    return(
    <>
        <body>
            <header class="container">
                <nav>
                    <ul>
                        <li><Link class="link" to="/">Accueil</Link></li>
                        <li><Link class="link" to="/About.jsx">Projets</Link></li>
                        <li><Link class="link" to="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main class="container">
                <section class="section1">
                    <h1 class="h1">Ryan Wassouf</h1>
                    <h2>Développeur Web & Mobile Junior</h2>
                    <p>Actuellement en formation pour devenir développeur web et mobile, je suis passionné par la création de solutions numériques modernes et efficaces. En tant que développeur junior, je m'efforce d'appliquer mes compétences techniques et ma curiosité pour développer des projets concrets tout en continuant d'apprendre et d'évoluer dans cet environnement en constante évolution.</p>
                </section>
                <hr class="hr"/>
                <section class="section_skills">
                    <h2>Compétences</h2>
                    <div class="div_skills">
                        <div class="border_skills">
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
                        <div class="border_skills">
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
                <hr class="hr"/>
                <section class="section_projects">
                    <div class="div_title_projects">
                        <h2>Projets</h2>
                        <Link class="link_articles_projects" to="#">Voir plus de projets</Link>
                    </div>
                    <div class="div_projects">
                        <article class="border_projects">
                            <img src={img_projet1} alt="img" />
                            <div class="div_articles_projects">
                                <h3>Projet John Doe</h3>
                                <p>Conception d'un portfolio virtuel</p>
                                <Link class="link_articles_projects" to="#">En savoir plus</Link>
                            </div>
                        </article>
                        <article class="border_projects">
                            <img src={img_projet2} alt="img" />
                            <div class="div_articles_projects">
                                <h3>Projet GeniArtHub</h3>
                                <p>Conception d'un site e-commerce</p>
                                <Link class="link_articles_projects" to="#">En savoir plus</Link>
                            </div>
                        </article>
                        <article class="border_projects">
                            <img src={img_projet3} alt="img" />
                            <div  class="div_articles_projects">
                                <h3>Projet Oraculus</h3>
                                <p>Conception d'un site d'horoscope</p>
                                <Link class="link_articles_projects" to="#">En savoir plus</Link>
                            </div>
                        </article>
                    </div>
                </section>
                <hr class="hr"/>
                <section class="section_contact">
                    <h2>Contact</h2>
                    <form>
                        <label for="name">Nom</label>
                        <input type="text" placeholder="Entrez votre Nom" id="name" name="name" required/>
                        <label for="email">Email</label>
                        <input type="email" placeholder="Entrez votre Email" id="email" name="email" required/>
                        <label for="message" >Message</label>
                        <textarea id="message" placeholder="Entrez votre message" name="message" cols="10" rows="10" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </section>
            </main>
            <footer>
                <div class="container">
                    <nav>
                        <ul>
                            <li><Link class="link" to="#">GitHub</Link></li>
                            <li><Link class="link" to="#">Linkedin</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </body>
    </>
    )
}
