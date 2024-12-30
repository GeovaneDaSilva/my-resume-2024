const qualifications = [
    {
        title: "AWS Certified Data Engineer – Associate",
        url: 'https://www.credly.com/badges/c7560664-9b93-41fe-8923-60f6dae36552',
        year: 2024,
        description: "The AWS Data Engineer certification provides skills in building and managing scalable, efficient data architectures. It focuses on designing and optimizing data pipelines, managing databases and data lakes on AWS, implementing data storage solutions like Amazon Redshift, and automating workflows while ensuring data integrity and security. Additionally, it uses AWS tools like Glue, S3, and Athena to process and query large volumes of data, optimizing performance and ensuring regulatory compliance.",
        institute: {
            name: "AWS CLOUD",
            shortName: "AWS",
            duration: "DEC 2024 - DEC 2028"
        }
    },
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

const html = qualifications.map(quali => `
    <li class="qualification-item">
        <div class="timeline-marker"></div>
        <div class="qualification-content">
            <div class="qualification-header">
                <time class="qualification-year">${quali.year}</time>
                <h3 class="qualification-title">
                    ${quali.title}
                    <a href="${quali.url}" target="_blank" class="qualification-link">
                        <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                    </a>
                </h3>
            </div>
            <p class="qualification-description">${quali.description}</p>
            <p class="qualification-institute">
                <span title="${quali.institute.name}">${quali.institute.shortName}</span>
                &bull; ${quali.institute.duration}
            </p>
        </div>
    </li>
`);

parent.innerHTML = html.join(" ");
