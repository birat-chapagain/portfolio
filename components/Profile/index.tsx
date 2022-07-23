import React from "react";
import { information } from "../../config";

const ProfilePanel = () => {
	return (
		<div className="flex flex-col flex-grow justify-around">
			<h1 className="text-6xl">Hi! I Am</h1>
			<h1 className="text-6xl">
				{information.firstName} {information.lastName}
			</h1>
		</div>
	);
};

export default ProfilePanel;
