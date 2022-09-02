export type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "cmyk"
  | "autumn"
  | "business"
  | "acid"
  | "lemonade"
  | "night"
  | "coffee"
  | "winter";

  export interface InformationType {
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    socials: SocialType;
    projects: ProjectType[];
    whatido:string;
    skills: SkillType[];
  }

  interface SkillType {
    type: string;
    list: string[];
  }
  
  interface ProjectType {
    name: string;
    description: string;
    link: string;
    image: string;
    badges: string[];
  }
  
  type SocialType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
