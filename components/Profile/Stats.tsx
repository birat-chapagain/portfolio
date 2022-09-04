import { information } from "../../config";

const Stats = () => {
	return (
		<div className="stats shadow mx-2">
			{information.highlightingStats.map((stat) => (
				<div className="stat" key={`stat-${stat.title}-${stat.value}`}>
					<div className="stat-title">{stat.title}</div>
					<div className="stat-value">{stat.value}</div>
				</div>
			))}
		</div>
	);
};

export default Stats;
