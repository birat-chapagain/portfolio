/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

interface ProjectCardType {
	name: string;
	description: string;
	link: string;
	image: string;
	badges: string[];
}

const ProjectCard = ({
	name,
	description,
	link,
	image,
	badges,
}: ProjectCardType) => {
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<motion.img
				whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
				src={image}
				alt="Project Sample"
				className="h-64 object-cover"
			/>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<div className="flex flex-row flex-wrap gap-2">
					{badges.map((badge, index) => (
						<div key={`${badge}-${index}`} className="badge badge-lg gap-x-4">
							{badge}
						</div>
					))}
				</div>
				<p>{description}</p>
				<div className="card-actions justify-center">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary btn-sm"
					>
						View Project
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
