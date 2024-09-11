import { Link, useParams } from "react-router-dom";
import Footer from '../component/footer';
import Header from '../component/header';
import projects_data from '/data/projects_data';
import '../styles/style.css';
import Project from "../component/project";
import { useEffect, useState } from "react";

export default function Projects_Pages() {
    const { page } = useParams();
    const [startProject, setStartProject] = useState(3);
    const projectPerPage = 9;
    const [endProject, setEndProject] = useState(page ? projectPerPage * page : projectPerPage);

    useEffect(() => {
        if(page === undefined || page === 1) {
            setStartProject(0);
            return
        } 
        const calcul = projectPerPage * (page - 1);
        setStartProject(calcul);

    }, [page]);

    const handlePageChange = (newPage) => {
        setStartProject(projectPerPage * (newPage - 1));
        setEndProject(projectPerPage * newPage);
    }

    return(
        <>
            <Header />
                <main className="container">
                <section className="section_projects">
                    <h2>Projets</h2>
                    <div className="div_projects">
                        {projects_data.slice(startProject,endProject).map(project => (
                            <Project project={project} key={project.id} />
                        ))}
                    </div>
                    </section>
                    <div className="div_page_change">
                        {Array.from({length: Math.ceil(projects_data.length / projectPerPage)}, (_, i) => (
                            <Link className={`link ${page ? i : "page_used"}`}  to="#" onClick={() => handlePageChange(i + 1)}>{i + 1}</Link>
                        ))}
                    </div>
                </main>
            <Footer />
        </>
    )
}