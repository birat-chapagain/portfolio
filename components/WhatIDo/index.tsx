import { Icons } from "icons";
import { BsQuestionSquare } from "react-icons/bs";
import { information } from "../../config";

const WhatIDo = () => {
	return (
		<div className="mx-8" id="whatido">
			<h1 className="font-semibold text-4xl">WHAT I DO</h1>
			<div className="my-4 mr-16">
				<p className="text-lg">{information.description}</p>
			</div>

			{information.skillsWithIcons.map((skill, index) => (
				<div
					key={`skill-with-icons-list-${index}`}
					className="flex flex-col gap-2 my-4"
				>
					<h1 className="font-semibold text-xl">{skill.type}</h1>
					<div className="flex flex-wrap gap-4">
						{skill.list.map((item) => {
							const Icon = Icons[item.toLowerCase()] ?? BsQuestionSquare;
							return (
								<Icon
									key={`skill-with-icons-list-${index}-${item}`}
									size={48}
								/>
							);
						})}
					</div>
				</div>
			))}

			{information.skills.map((skill, index) => (
				<div key={`skill-list-${index}`} className="flex flex-col gap-2 my-4">
					<h1 className="font-semibold text-xl">{skill.type}</h1>
					<div className="flex flex-wrap gap-4">
						{skill.list.map((item) => (
							<div
								key={`skill-list-${index}-${item}`}
								className={`badge badge-lg ${colors[index]} gap-2 text-lg`}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default WhatIDo;

const colors: string[] = [
	"badge-success",
	"badge-info",
	"badge-warning",
	"badge-success",
	"badge-info",
	"badge-warning",
	"badge-success",
	"badge-info",
	"badge-warning",
];
