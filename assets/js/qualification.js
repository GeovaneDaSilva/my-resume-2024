const qualifications = [
    {
        title: "DevOps",
        url: 'https://images.credential.net/embed/18b6gedo.png',
        year: 2022,
        description: "With my DevOps certification from the University of Chicago, I mastered continuous integration, robust software infrastructures, virtualization, cloud architectures, system optimization, and automated deployments.",
        institute: {
            name: "The University of Chicago",
            shortName: "The University of Chicago",
            duration: "October 2021 - February 2022"
        }
    },
    {
        title: "Full Stack Web Development",
        url: 'https://www.coursera.org/account/accomplishments/specialization/WSSPV52K9FBT',
        year: 2020,
        description: "In this course, I learned to design responsive web pages with Bootstrap 4, develop dynamic web applications using Angular, create cross-platform mobile apps with NativeScript, Angular, and Redux, and build robust server-side solutions with Node.js, Express, and MongoDB.",
        institute: {
            name: "University of Astral",
            shortName: "University of Astral",
            duration: "January 2016 - December 2020"
        }
    },
    {
        title: "Computer Science",
        year: 2016,
        description: "At the University of Santa Cruz, I gained expertise in software development, algorithms, and system design. The program covered programming languages like Python, Java, and C++, as well as web development, database management, and cybersecurity.",
        institute: {
            name: "University of Santa Cruz",
            shortName: "Bachelor's Degree",
            duration: "July 2012 - Jun 2016"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="${quali.url}" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

