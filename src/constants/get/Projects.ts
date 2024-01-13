export const GetProjects = [
    {
        emoji: "🖱️",
        name: "Roblox MouseFix ",
        description: "Fix cursor in roblox uwp",
        hasdeployed: false,
        deployedLink: "",
        codeLink: "https://github.com/RevenzMind/RBXMouseFix",
    },
    {
        emoji: "🎮",
        name: "Roblox Autoclicker",
        description: "Autoclicker for roblox with customizable cps and hotkeys",
        hasdeployed: false,
        deployedLink: "",
        codeLink: "https://github.com/RevenzMind/Roblox-Autoclicker",
    },

];


export interface ProjectType {
    emoji: string;
    name: string;
    description: string;
    hasdeployed: boolean;
    deployedLink: string;
    codeLink: string;
}