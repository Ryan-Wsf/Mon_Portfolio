import React from 'react';
import { Link } from 'react-router-dom';
import projects_data from '/data/projects_data.json'; 

export default function Projects() {
  return (
    <section className="section_projects">
      <h2>Projets</h2>
      <div className="div_projects">
        {projects_data.slice(0,9).map(project => (
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
  )
}

