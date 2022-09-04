import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
import { information } from "../../config";

const WorkExperience = () => {
	return (
		<>
			<div className="mx-8 md:text-center" id="projects">
				<h1 className="font-semibold text-5xl">PLACES I’VE WORKED.</h1>
				<div className="my-4 mr-16">
					<p className="text-lg">
						These are some of the projects, i have worked on over the years.
					</p>
				</div>
			</div>
			<ul className="relative border-l border-primary ml-8 sm:ml-52">
				{information.workExperince.map((work, index) => (
					<WorkExperienceItem
						key={`work-${work.company}-${index}`}
						company={work.company}
						description={work.description}
						designation={work.designation}
						time={work.time}
						learning={work.learning}
					/>
				))}
			</ul>
		</>
	);
};

export default WorkExperience;
