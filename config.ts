import { InformationType, Theme } from "types";

/**
 * The theme of your portfolio. You can select one from the following. Make sure you and your friend choose a different one.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {Theme}
 */
export const theme: Theme = "garden";

export const analyticsId = "G-2S22V4P442";
export const deployedURL = "https://effortless-portfolio.vercel.app";

export const information: InformationType = {
	email: "sahrohit9586@gmail.com",
	firstName: "Rohit",
	lastName: "Sah",
	description:
		"I am a software engineer and a web developer. I am passionate about building web applications and solving problems.",
	highlightingStats: [
		{
			title: "Projects",
			value: 10,
		},
		{
			title: "Reddit Karma",
			value: 13862,
		},
	],
	socials: {
		github: "http://github.com/sahrohit",
		linkedin: "https://www.linkedin.com/in/sahrohit/",
		twitter: "https://twitter.com/sah_rohite",
		instagram: "https://www.instagram.com/sah_rohite/",
		facebook: "https://www.facebook.com/imadeyoureadthis26/",
		medium: "https://medium.com/@sahrohit9586",
		youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		stackoverflow: "https://stackoverflow.com/users/13238555/rohit",
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
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript", "Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
	],
	workExperince: [
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
		{
			company: "Apple Inc.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et alias delectus autem quia, sint blanditiis, \n facere distinctio perspiciatis rem illo aspernatur dicta quibusdam quisquam, laudantium consequuntur officiis repellendus fugiat!",
			designation: "Senior Product Manager",
			time: "2022 - Present",
			learning: [
				"Learnt to print Hello World",
				"Learnt to center CSS divs",
				"Learnt to crash the production the fastest.",
			],
		},
	],
	cheesyOutro: "Thanks for reading till the end.",
};
