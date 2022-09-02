import { information } from "../../config";

const WhatIDo = () => {
	return (
		<div className="mx-8">
			<h1 className="font-semibold text-4xl">What I Do</h1>
			<div className="my-4 mr-16">
				<p className="text-lg">
					{information.description}
					{information.description}
				</p>
			</div>

			{information.skills.map((skill, index) => (
				<div key={index} className="flex flex-col gap-2 my-4">
					<h1 className="font-semibold text-xl">{skill.type}</h1>
					<div className="flex flex-wrap gap-4">
						{skill.list.map((item) => (
							<div
								key={index}
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
