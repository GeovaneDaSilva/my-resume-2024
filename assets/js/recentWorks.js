const recentWorks = [
    {
        title: "Mobile | Saas",
        description: "At Inmigra we bring together in a single application all the tools that Latino immigrants in the United States need, to feel supported from beginning to end in the process. ​",
        techs: ["Flutter", "Dart", "Cubit", "Bloc", "OneSignal", "Firebase", "Video Call SDK", "Stripe", "RevenueCat", "ChatGPT", "OpenAI", "Socket.IO"],
        img: "images/inmigra-port.png",
        url:"https://inmigrausa.com/"
    },
    {
        title: "CRM MVP | SaaS",
        description: "Designed and developed a Minimum Viable Product (MVP) CRM system and an interactive website as a Software as a Service (SaaS) solution using WordPress, MySQL, and an Angular-based dashboard for a delivery company in Puerto Rico. This scalable solution led to a notable increase in revenue and user registrations by delivering a streamlined, efficient, and user-friendly software experience.",
        techs: ["WordPress Codex", "Node", "JS", "TS", "PHP", "MySQL", "AWS Apache", "Unraid", "API", "WebSockets"],
        img: "images/sendtopr.png"
    },
    {
        title: "Advanced Course in Node.js, TypeScript, TDD, and Clean Code Practices",
        description: "Developed a highly acclaimed Udemy course designed to elevate programming skills by sharing expert knowledge in Test-Driven Development (TDD) and TypeScript. The course offers an in-depth exploration of SOLID principles and Clean Architecture, empowering developers to build scalable and maintainable software. By combining theory with hands-on practice, this course provides actionable insights and cutting-edge techniques, positioning participants to excel in modern software development.",
        techs: ["Jest", "TS", "JS", "TDD", "SOLID", "MongoDB", "Node"],
        img: "images/tdd-typescript.png",
        "url":"https://www.udemy.com/course/programador-autodidacta-nodejs-typescript-tdd-clean-code/"
    },
];
const parent = document.getElementById('recent-works');

const getTech = (techs) => {
    return techs.map(tech =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100  hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
                ${tech}
            </button>`).join(" ");
}

const html = recentWorks.map(work =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <img class="rounded-t-lg w-full" src=${work.img} alt=${work.title} />
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-semibold text-gray-900 dark:text-gray-200">${work.title}</h5>
        <p class="font-light text-gray-800 dark:text-gray-400">${work.description}</p>
        <div class="my-4 flex flex-wrap">
            ${getTech(work.techs)}
        </div>
        <a href="${work.url}" target="_blank"
            class="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
        </a>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");