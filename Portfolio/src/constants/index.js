import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "posgresql",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Novaji Introserve",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "July 2024 - September 2024",
        points: [
            "Developing Static websites using HTML, CSS, and JavaScript.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Connect",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "October 2024 - February 2025",
        points: [
            "School project to develop a functional web application ",
            "Played the leadership role",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to group members",
        ],
    },
    
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/urex014',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/amarachukwu-onuoha-a20b58320',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Todo App',
        description: 'Developed a web application that tracks tasks and deadlined',
        link: 'https://github.com/urex.014/todo-app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chat app',
        description: 'A group project created with flask(python)',
        link: 'https://github.com/urex014/connect-flask',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Uber clone',
        description: 'An Uber clone with the aim of refining my fullstack skills',
        link: 'https://github.com/urex014',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'E-commerce',
        description: 'A fullstack e-commerce website to make sales easier for your business',
        link: 'https://github.com/urex014',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Connect Ai',
        description: 'My Ai model.',
        link: 'https://github.com/urex014',
    }
];