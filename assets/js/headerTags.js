const tags = [
    {
        icon: `<i class="fa-solid fa-desktop fa-sm mr-1 text-blue-700"></i>`,
        name: "Web Developer"
    },
    {
        icon: `<i class="fa-solid fa-code fa-sm mr-1 text-blue-400"></i>`,
        name: "Mobile UI/UX Designer"
    },
    {
        icon: `<i class="fa-solid fa-code fa-sm mr-1 text-green-600"></i>`,
        name: "Node"
    },
    {
        icon: `<i class="fa-solid fa-terminal fa-sm mr-1 text-orange-500"></i>`,
        name: "AWS"
    },
    {
        icon: `<i class="fa-brands fa-docker fa-sm mr-1 text-purple-600"></i>`,
        name: "DevOps"
    },

    {
        icon: `<i class="fa-brands fa-flutter fa-sm mr-1 text-blue-600"></i>`,
        name: "Flutter"
    },
    {
        icon: `<i class="fa-brands fa-android fa-sm mr-1 text-green-600"></i>`,
        name: "Android Studio"
    },
    {
        icon: `<i class="fa-brands fa-swift fa-sm mr-1 text-blue-600"></i>`,
        name: "Xcode"
    },
    {
        icon: `<i class="fa-brands fa-wordpress fa-sm mr-1 text-grey-600"></i>`,
        name: "WordPress Codex"
    },
    {
        icon: `<i class="fa-solid fa-server fa-sm mr-1 text-purple-600"></i>`,
        name: "Heroku"
    },
   
];

const parent = document.getElementById("header-tags");

const html = tags.map(tag =>
    `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100  hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5  mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700">
        ${tag.icon}
        ${tag.name}
    </button>`
);

parent.innerHTML = html.join(" ");