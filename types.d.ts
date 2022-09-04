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


  /**
 * The theme of your portfolio. You can select one from the following.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {InformationType}
 */
  export interface InformationType {
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    highlightingStats: HighlightingStatType[];
    socials: SocialType;
    projects: ProjectType[];
    whatido:string;
    skills: SkillType[];
    skillsWithIcons: SkillType[];
    workExperince: WorkExperienceType[];
    cheesyOutro: string;
  }

  interface WorkExperienceType {
    company: string;
    designation: string;
    time: string;
    description: string;
    learning:string[];
  }

  interface HighlightingStatType {
    title: string;
    value: number;
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

