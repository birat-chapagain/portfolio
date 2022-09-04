import {
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsMedium,
	BsStackOverflow,
	BsTwitter,
	BsYoutube,
} from "react-icons/bs";
import { information } from "../../config";

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
