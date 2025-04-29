interface Skill {
    name: string;
    imageurl: string;
}

const skillsData: Skill[] = [
    {name: "React", imageurl: "skills/Framework/tsx.png"},
    {name: "Astro", imageurl: "skills/Framework/astro.png"},
    {name: "Nextjs", imageurl: "skills/Framework/next.png"},
    {name: "Javascript", imageurl: "skills/Frontend/js.png"},
    {name: "Typescript", imageurl: "skills/Frontend/ts.png"},
    {name: "HTML", imageurl: "skills/Frontend/html.png"},
    {name: "CSS", imageurl: "skills/Frontend//css.png"},
    {name: "Git", imageurl: "skills/DevTools/git.png"},
    {name: "Vscode", imageurl: "skills/DevTools/vscode.png"},
    {name: "Visual Studio", imageurl: "skills/DevTools/csproj.png"},
    {name: "Npm", imageurl: "skills/DevTools/npm.png"},
] as const;

export const Skills = skillsData;
