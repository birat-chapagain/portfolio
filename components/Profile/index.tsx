import React from "react";
import { information } from "../../config";

const ProfilePanel = () => {
	return (
		<div className="flex flex-col flex-grow justify-around mx-8">
			<div>
				<h1 className="font-semibold text-6xl">Hi! I Am </h1>
				<h1 className="font-semibold text-6xl">
					{information.firstName} {information.lastName}
				</h1>
			</div>
			<div className="my-4 mr-16">
				<p className="text-lg">{information.whatido}</p>
			</div>
			<div>
				<a
					className="btn btn-active btn-primary"
					href={`mailto:${information.email}`}
				>
					Get in Touch
				</a>
			</div>
		</div>
	);
};

export default ProfilePanel;
