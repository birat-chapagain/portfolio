import { InformationType, Theme } from "types";

/**
 * The theme of your portfolio. You can select one from the following. Make sure you and your friend choose a different one.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {Theme}
 */
export const theme: Theme = "retro";

export const analyticsId = "G-2S22V4P442";
export const deployedURL = "https://biratchapagain.com.np";

export const information: InformationType = {
	email: "biratchcapagain68@gmail.com",
	firstName: "Birat",
	lastName: "Chapagain",
	description:
		"I am a software engineer and a web developer. I am passionate about building web applications and solving problems.",
	highlightingStats: [
		{
			title: "Projects",
			value: 4,
		},
		{
			title: "Backlogs",
			value: 0,
		},
	],
	socials: {
		github: "http://github.com/birat-chapagain",
		linkedin: "https://www.linkedin.com/in/birat-chapagain-6a6b16220/",
		twitter: null,
		instagram: null,
		facebook: null,
		medium: null,
		youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		stackoverflow: null,
	},
	whatido:
		"I`ve been learning web design for several years and am presently pursuing a degree as a Computer Science Engineer with an emphasis on database architecture, and machine learning.",
	skills: [
		{
			type: "Languages",
			list: ["English", "Japanese", "Hindi", "Nepali"],
		},
	],
	skillsWithIcons: [
		{
			type: "Frontend Centric",
			list: ["HTML", "CSS", "Javascript", "React", "Nextjs", "Angular"],
		},
		{
			type: "Backend Centric",
			list: ["Typescript", "Graphql", "Nodejs", "Nestjs", "Expressjs"],
		},
		{
			type: "Data Centric",
			list: ["Python", "Scikit Learn", "Tensorflow", "Keras", "Pytorch"],
		},
	],
	projects: [
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://gotrip.vercel.app/",
			image: "https://cdn.discordapp.com/attachments/695873894980124702/1016630845412483102/unknown.png",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://gotrip.vercel.app/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript", "Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://gotrip.vercel.app/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://gotrip.vercel.app/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
	],
	workExperince: [],
	cheesyOutro: "Thanks for reading till the end.",
};
