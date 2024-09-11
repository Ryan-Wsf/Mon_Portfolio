import { Link } from "react-router-dom";

export default function Project({project}) {
    return (
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
    )
}