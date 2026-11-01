export async function getRepositories() {
    try {
        const response = await fetch("https://api.github.com/users/AkramBenChaa/repos");

        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();

        const projects = data.map((project) => {
            return {
                name: project.name,
                description: project.description || "No description available",
                repositoryUrl: project.html_url,
                language: project.language,
                homepage: project.homepage,
            };
        });

        return projects;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}
