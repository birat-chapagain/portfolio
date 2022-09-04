/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Nextdotjs,
	ReactJs,
	Html5,
	CssThree,
	Javascript,
	Angularjs,
} from "@icons-pack/react-simple-icons";

export const Icons: IconType = {
	react: ReactJs,
	html: Html5,
	css: CssThree,
	javascript: Javascript,
	nextjs: Nextdotjs,
	angular: Angularjs,
};

type IconType = {
	[key: string]: any;
};
