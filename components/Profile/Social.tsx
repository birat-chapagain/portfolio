import React from "react";
import { information } from "../../config";
import {
	BsFacebook,
	BsGithub,
	BsLinkedin,
	BsTwitter,
	BsInstagram,
	BsMedium,
	BsYoutube,
	BsStackOverflow,
} from "react-icons/bs";

const Social = () => {
	return (
		<div className="flex flex-row justify-start m-8 gap-3">
			{Object.keys(information.socials).map((key) => {
				if (!information.socials[key]) return;
				const Icon = Icons[key] ?? null;
				return (
					<a
						key={key}
						href={information.socials[key]}
						target="_blank"
						rel="noreferrer"
					>
						<Icon className="text-3xl" />
					</a>
				);
			})}
		</div>
	);
};

export default Social;

const Icons: IconType = {
	facebook: BsFacebook,
	github: BsGithub,
	linkedin: BsLinkedin,
	twitter: BsTwitter,
	instagram: BsInstagram,
	medium: BsMedium,
	youtube: BsYoutube,
	stackoverflow: BsStackOverflow,
};

type IconType = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
