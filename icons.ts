/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Nextdotjs, ReactJs } from "@icons-pack/react-simple-icons";

export const Icons: IconType = {
	react: ReactJs,
	nextjs: Nextdotjs,
	default: ReactJs,
};

type IconType = {
	[key: string]: any;
};
