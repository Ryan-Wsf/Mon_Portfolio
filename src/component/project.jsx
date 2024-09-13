import React, { useState } from 'react';
import '../styles/style.css';  // Assurez-vous que le chemin est correct

export default function Project({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

return (
    <article className="border_projects" key={project.id}>
        <img src={project.image} alt={project.title} />
        <div className="div_articles_projects">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="link_articles_projects" onClick={openModal}>
                En savoir plus
            </button>
        </div>

        {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>{project.title}</h2>
                    <img className="img_modal" src={project.image} alt={project.title} />
                    <p>{project.fullDescription}</p>
                    <div className='div_icon_language'>
                        {project.languageIcone.map((e, i) => (
                            <img className="icon_language" key={i} src={e} alt="icone" />
                        ))}
                    </div>
                    <button className="button_modal" onClick={closeModal}>Fermer</button>
                </div>
            </div>
        )}
    </article>
);
}