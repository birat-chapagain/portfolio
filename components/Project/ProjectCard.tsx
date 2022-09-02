
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
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={image} alt="Project Sample" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
				{badges.map((badge) => (
					<div key={badge} className="badge badge-lg">
						{badge}
					</div>
				))}
				<div className="card-actions justify-end">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary"
					>
						Buy Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
