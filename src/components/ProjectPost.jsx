import "./ProjectPost.css";

export default function ProjectPost({ img, name, explain, github, liveDemo }) {
    return (
        <div className="projectpost">
            <div className="projectpost-title">
                {img ? (
                    <img src={img} alt="project-logo" />
                ) : (
                    <span className="projectpost-icon" aria-hidden="true">
                        💻
                    </span>
                )}
                <p>{name}</p>
            </div>

            <p className="projectpost-desc">{explain}</p>

            <div className="link">
                {github ? (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                ) : (
                    <span className="link-disabled">Github</span>
                )}
                {liveDemo ? (
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                        نسخة تجريبية
                    </a>
                ) : (
                    <span className="link-disabled">نسخة تجريبية</span>
                )}
            </div>
        </div>
    );
}
