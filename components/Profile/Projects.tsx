const Projects = () => {
	return (
		<div className="stats bg-secondary text-secondary-content mx-1 sm:mx-8">
			<div className="stat">
				<div className="stat-title">Repositories</div>
				<div className="stat-value">8</div>
				<div className="stat-actions">
					<button className="btn btn-sm btn-success">Add funds</button>
				</div>
			</div>

			<div className="stat">
				<div className="stat-title">Current balance</div>
				<div className="stat-value">$89,400</div>
				<div className="stat-actions">
					<button className="btn btn-sm">Withdrawal</button>
					<button className="btn btn-sm">deposit</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
