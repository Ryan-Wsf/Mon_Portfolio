import { Link } from "react-router-dom";
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
    return(
        <header className="container">
            <nav>
                <ul>
                    <li><Link className="link" to="/">Accueil</Link></li>
                    <li><Link className="link" to="/Projects_Pages/1">Projets</Link></li>
                    <li><Link className="link" to="#section_contact">Contact</Link></li>
                    <li><Link className="link" to="https://github.com/Ryan-Wsf?tab=repositories"><Github /></Link></li>
                    <li><Link className="link" to="https://www.linkedin.com/in/ryan-wassouf-2a18152b2/"><Linkedin /></Link></li>
                </ul>
            </nav>
        </header>
    )
}