import FadeInWhenVisible from "@components/shared/FadeWhenVisible";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface WorkExperienceItemProps {
	time: string;
	company: string;
	designation: string;
	description: string;
	learning?: string[];
	learnMoreLink?: string;
}

const WorkExperienceItem = ({
	time,
	company,
	description,
	designation,
	learning,
	learnMoreLink,
}: WorkExperienceItemProps) => {
	return (
		<FadeInWhenVisible>
			<li className="mb-10 ml-4">
				<div className="absolute w-5 h-5 bg-secondary rounded-full mt-2.5 -left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
				<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
					{time}
				</time>
				<h3 className="text-xl font-semibold">
					{designation.toUpperCase()} (
					<span className="text-primary">{company.toUpperCase()}</span>)
				</h3>
				<p className="mb-4 font-normal whitespace-pre-line">{description}</p>

				{learning && (
					<div className="mb-4 text-base">
						{learning.map((learn, index) => (
							<div
								key={`learn-${index}`}
								className="flex flex-row gap-3 items-center"
							>
								<BiRightArrow className="text-secondary" />
								<p>{learn}</p>
							</div>
						))}
					</div>
				)}

				{learnMoreLink && (
					<a href="#" className="btn btn-secnodary btn-sm">
						Learn more{" "}
						<svg
							className="ml-2 w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				)}
			</li>
		</FadeInWhenVisible>
	);
};

export default WorkExperienceItem;
