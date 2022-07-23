import React from "react";
import { information } from "../../config";

const Logo = () => {
	return (
		<h1 className="font-['Comfortaa'] text-4xl p-4 font-bold">
			{information.firstName}
			<span className="text-accent">.</span>
		</h1>
	);
};

export default Logo;
