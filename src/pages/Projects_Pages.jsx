import { Link, NavLink, useParams } from "react-router-dom";
import Footer from '../component/footer';
import Header from '../component/header';
import projects_data from '/data/projects_data';
import '../styles/style.css';
import Project from "../component/project";
import { useEffect, useState } from "react";

export default function Projects_Pages() {
    const { page } = useParams();
    const projectPerPage = 9;
    const currentPage = parseInt(page, 10) || 1; 

    const [startProject, setStartProject] = useState((currentPage - 1) * projectPerPage);
    const [endProject, setEndProject] = useState(currentPage * projectPerPage);

    useEffect(() => {
        const calcul = projectPerPage * (currentPage - 1);
        setStartProject(calcul);
        setEndProject(calcul + projectPerPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setStartProject(projectPerPage * (newPage - 1));
        setEndProject(projectPerPage * newPage);
        
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Header />
            <main className="container">
                <section className="section_projects">
                    <h2>Projets</h2>
                    <div className="div_projects">
                        {projects_data.slice(startProject, endProject).map(project => (
                            <Project project={project} key={project.id} />
                        ))}
                    </div>
                </section>
                <div className="div_page_change">
                {Array.from({ length: Math.ceil(projects_data.length / projectPerPage) }, (_, i) => (
                    <NavLink
                        key={i}
                        className="link"
                        to={`/Projects_Pages/${i + 1}`} 
                    >
                        {i + 1}
                    </NavLink>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
