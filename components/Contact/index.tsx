import React from "react";
import { information } from "../../config";

const Contact = () => {
	if (!information.cheesyOutro) {
		return null;
	}
	return (
		<div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-0 m-8 my-16 items-center">
			<div className="basis-2/5 w-full">
				<div className="flex flex-col">
					<h1 className="font-semibold text-6xl">Say Hello!</h1>
				</div>
			</div>

			<div className="basis-3/5">
				<p className="whitespace-pre-line">{information.cheesyOutro}</p>
			</div>
		</div>
	);
};

export default Contact;
