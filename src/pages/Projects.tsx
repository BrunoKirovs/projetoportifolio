
import { projects } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard";

export function Projects () {
    return (
        <section>
            <h1 className="text-4x1 font-bold mb-6 text-center">Projetos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map ((project) => ( <ProjectCard key={project.id} project={project}/>))}
            </div>
        </section>
    )
}
