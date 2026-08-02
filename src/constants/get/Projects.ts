export const projects = [
     {
        emoji: "😺",
        name: "RawenChat",
        description: "Twitch chat, TTS, Overlay, 2d vtuber, etc",
        deployedLink: "https://chat.rawencat.tech/",
        codeLink: "https://github.com/rawencat/RawenChat",
    },
      {
        emoji: "🔫",
        name: "Rawr",
        description: "A valorant tracker, for stats ingame and some acc details (no app src until i finish all features)",
        deployedLink: "https://rawr.rawencat.tech/",
        codeLink: "https://github.com/RAWRVAL/RAWR-web",
    },
    {
        emoji: "🖱️",
        name: "Roblox MouseFix ",
        description: "Fix cursor in roblox uwp",
        deployedLink: "",
        codeLink: "https://github.com/RawenCat/RBXMouseFix",
    },
    {
        emoji: "🎮",
        name: "Roblox Autoclicker",
        description: "Autoclicker for roblox with customizable cps and hotkeys",
        deployedLink: "",
        codeLink: "https://github.com/RawenCat/Roblox-Autoclicker",
    },
 {
        emoji: "🎮",
        name: "RawenSwitcher",
        description: "RiotClient Account Switcher C#",
        deployedLink: "",
        codeLink: "https://github.com/RawenCat/RawenSwitch",
    },
   
   
];


export interface ProjectType {
    emoji: string;
    name: string;
    description: string;
    deployedLink: string;
    codeLink: string;
}
