const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "TypeScript", label: "" },
            { icon: `<i class="fa-brands fa-flutter fa-xs text-blue-600"></i>`, name: "Dart", label: "" },
            { icon: `<i class="fa-brands fa-php fa-sm text-red-600"></i>`, name: "PHP", label: "" },
            { icon: `<i class="fa-brands fa-java fa-sm text-red-600"></i>`, name: "Java", label: "" },
            { icon: `<i class="fa-brands fa-python fa-sm text-yellow-600"></i>`, name: "Python", label: "" },
            { icon: `<i class="fa-brands fa-add fa-sm text-yellow-600"></i>`, name: "C#", label: "" },
            { icon: `<i class="fa-brands fa-markdown fa-2xs text-slate-600"></i>`, name: "Markdown", label: "" }
        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React", label: "" },
            { icon: `<i class="fa-brands fa-react text-red-600"></i>`, name: "React Native", label: "" },
            { icon: `<i class="fa-brands fa-angular text-red-600"></i>`, name: "Angular", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Ionic", label: "" },
            { icon: `<i class="fa-brands fa-flutter fa-xs text-blue-600"></i>`, name: "Flutter", label: "" },
            { icon: `<i class="fa-brands fa-wordpress fa-xs text-blue-600"></i>`, name: "WordPress Codex", label: "" },
            
            { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Firebase", label: "" },
            { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind", label: "" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "JQuery", label: "" }
        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js", label: "" },
            { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js", label: "" },
            { icon: `<i class="fa-brands fa-aws text-yellow-600"></i>`, name: "AWS Lambda", label: "" },
            { icon: `<i class="fa-brands fa-j text-red-600"></i>`, name: "JWT", label: "" },
            { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Cloud Functions", label: "" }
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MongoDB", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "MySql", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "PostgreSQL", label: "" },
            { icon: `<i class="fa-solid fa-fire fa-xs text-red-700"></i>`, name: "Cloud Storage", label: "" },
            { icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`, name: "Redis", label: "" },
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git", label: "" },
            { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub", label: "" },
            { icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`, name: "VS", label: "" },
        ]
    },
    {
        title: "Design Tools",
        skills: [
            { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-yellow-400"></i>`, name: "Adobe Photoshop", label: "" },
            { icon: `<i class="fa-solid fa-bezier-curve fa-xs text-orange-600"></i>`, name: "Adobe Illustrator", label: "" },
            { icon: `<i class="fa-brands fa-figma  text-orange-400"></i>`, name: "Figma", label: "" },
            { icon: `<i class="fa-solid fa-file-powerpoint  text-blue-400"></i>`, name: "MS PowerPoint", label: "" },
        ]
    },
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`);

    return skillHtml.join(" ");
}

const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);


parent.innerHTML = html.join(" ");