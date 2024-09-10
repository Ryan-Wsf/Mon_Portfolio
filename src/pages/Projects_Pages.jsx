import { Link } from "react-router-dom";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Footer from '../component/footer';
import Header from '../component/header';
import Projects from "../component/projects";
import '../styles/style.css';


export default function Projects_Pages() {
    return(
        <>
            <Header />
                <main className="container">
                    <Projects />
                    <div className="div_page_change">
                        <Link className="link" to="#"><ArrowBigLeft /></Link>
                        <Link className="link" to="#">1</Link>
                        <Link className="link" to="#">2</Link>
                        <Link className="link" to="#"><ArrowBigRight /></Link>
                    </div>
                </main>
            <Footer />
        </>
    )
}
