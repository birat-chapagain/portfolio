import { information } from "config";
import ProjectCard from "./ProjectCard";
const ProjectSection = () => {
	return (
		<>
			<div className="mx-8 md:text-center">
				<h1 className="font-semibold text-5xl">SOME OF MY WORKS</h1>
				<div className="my-4 mr-16">
					<p className="text-lg">
						These are some of the projects, i have worked on over the years.
					</p>
				</div>
			</div>
			<div
				className={`grid grid-cols-1 md:grid-cols-2 ${
					information.projects.length % 3 === 0
						? `lg:grid-cols-3`
						: `lg:grid-cols-4`
				} gap-4 md:gap-4 lg:gap-6 p-5`}
			>
				{information.projects.length === 2 && <div></div>}
				{information.projects.map((project, index) => (
					<ProjectCard
						name={project.name}
						key={`project-${project.name}-${index}`}
						badges={project.badges}
						description={project.description}
						image={project.image}
						link={project.link}
					/>
				))}
				{information.projects.length === 2 && <div></div>}
			</div>
		</>
	);
};

export default ProjectSection;
