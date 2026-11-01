import "./App.css";
import ProjectPost from "./components/ProjectPost";
import Instagram from "./icons/instagram.png";
import Twitter from "./icons/twitter.png";
import LinkedIn from "./icons/linkedin.png";
import { useState, useEffect } from "react";
import { getRepositories } from "./services/github";

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const instagram = "https://www.instagram.com/akram.ben.chaa/";
    const twitter = "https://x.com/akram_livaye";
    const linkedIn = "https://www.linkedin.com/in/akram-ben-chaa-b75256439";

    useEffect(() => {
        async function loadProjects() {
            const repos = await getRepositories();
            setProjects(repos);
            setLoading(false);
        }
        loadProjects();
    }, []);

    return (
        <div className="app">
            <header className="app-header">
                <h1>Akram Ben Chaa</h1>
                <p>My GitHub projects</p>
            </header>

            <main className="projects-list">
                {loading && <p className="status-message">Loading projects...</p>}
                {!loading && projects.length === 0 && (
                    <p className="status-message">No projects found.</p>
                )}
                {!loading &&
                    projects.map((project) => (
                        <ProjectPost
                            key={project.repositoryUrl}
                            name={project.name}
                            explain={project.description}
                            github={project.repositoryUrl}
                            liveDemo={`https://akrambenchaa.github.io/${project.name}/`}
                        />
                    ))}
            </main>

            <footer>
                <hr />
                <div className="midea">
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="X" />
                    </a>
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
