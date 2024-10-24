const keys = require('./keys.json');

const logotext = "CHASE";
const meta = {
    title: "Chase Villeneuve",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Chase Villeneuve",
    animated: {
        first: "I enjoy coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A little bit about me",
    aboutme: `I am a senior Computer Science student at Rose-Hulman Institute of Technology
              with a passion for software development. I have experience in full stack development,
              mobile app development, and data science. I am always looking for new opportunities to
              learn and grow as a developer.`,
};
const worktimeline = [{
    jobtitle: "Test Technician",
    where: "SMTC",
    date: "2022 - current",
},
];

const activities = [{
    title: "Culinary Club",
    where: "Rose-Hulman Institute of Technology",
    date: "2024 - current",
},
{
    title: "Magic the Gathering Club",
    where: "Rose-Hulman Institute of Technology",
    date: "2022 - current",
},
{
    title: "Floor Hockey Club",
    where: "Rose-Hulman Institute of Technology",
    date: "2021 - current",
},
]

const relatedClasses = [
    {
        title: "Into to Software Development",
        date: "Winter 2021-22"
    },
    {
        title: "OO Software Development",
        date: "Winter 2021-22"
    },
    {
        title: "Introduction to Systems Programming",
        date: "Spring 2021-22"
    },
    {
        title: "Data Structures and Algorithm Analysis",
        date: "Fall 2022-23"
    },
    {
        title: "Computer Architecture I",
        date: "Fall 2022-23"
    },
    {
        title: "Computer Architecture II",
        date: "Winter 2023-24"
    },
    {
        title: "Web Programming",
        date: "Winter 2022-23"
    },
    {
        title: "Operating Systems",
        date: "Spring 2022-23"
    },
    {
        title: "Database Systems",
        date: "Spring 2022-23"
    },
    {
        title: "Software Requirements Engineering",
        date: "Fall 2023-24"
    },
    {
        title: "Programming Language Concepts",
        date: "Fall 2023-24"
    },
    {
        title: "Effective Java",
        date: "Fall 2023-24"
    },
    {
        title: "Software Design",
        date: "Winter 2023-24"
    },
    {
        title: "Design and Analysis of Algorithms",
        date: "Spring 2023-24"
    },
    {
        title: "Cryptography",
        date: "Spring 2023-24"
    },
    {
        title: "Cybersecurity Seminar",
        date: "Spring 2023-24"
    },
    {
        title: "Theory of Computation",
        date: "Spring 2023-24"
    },
    {
        title: "Deep Learning",
        date: "Fall 2024-25"
    },
];


const skills = [
    {
        name: "Java",
        value: 90,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "HTML",
        value: 75,
    },
    {
        name: "C",
        value: 70,
    },
    {
        name: "CSS",
        value: 65,
    },
    {
        name: "React",
        value: 65,
    },
    {
        name: "Racket",
        value: 55,
    },
    {
        name: "Verilog",
        value: 40,
    },
];

const dataportfolio = [
    {
        img: "https://attic.sh/74x5qfk994nubp3cpn8txh3ccdgm",
        description: "An app for managing of football statistics using mySQL and java",
        link: "https://drive.google.com/file/d/1QzZLxS9N8vN5fkLwIAdVDuiTHkHwyj59/view?usp=sharing",
    },
    {
        img: "https://attic.sh/44lj5maxmdru3i8kcegqcr2hujse",
        description: "A processor designed from the ground up with custom architecture",
        link: 'https://drive.google.com/file/d/1Uvb3Lyt7X6oOsoy0En4_V0r6luguiuRU/view?usp=sharing'
    },
    {
        img: "https://attic.sh/kcacmlyg67ambv0xcehrb4s1tw8a",
        description: "A digital pantry app designed with firebase, html, js, and css",
        link: "https://youtu.be/9NvmcWHpUpw",
    },
    {
        img: "https://cdn.creazilla.com/cliparts/7772530/lint-roller-clipart-xl.png",
        description: "A custom linter for java projects capable of checking for design patterns, principles, and styles",
        link: "https://youtu.be/I7Wsvamd1BE",
    },
    {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f794a11-0a82-49f5-9569-81d57187cfdf/dc9ia7j-bd91e86b-31c0-46f9-bfa6-2f13ee72c179.jpg/v1/fill/w_1024,h_847,q_75,strp/bomb_jack_route_combo_by_retroreloads_dc9ia7j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ3IiwicGF0aCI6IlwvZlwvMWY3OTRhMTEtMGE4Mi00OWY1LTk1NjktODFkNTcxODdjZmRmXC9kYzlpYTdqLWJkOTFlODZiLTMxYzAtNDZmOS1iZmE2LTJmMTNlZTcyYzE3OS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.K5NdVmTjIuy8BoyL_NfNVXKpikhpeOc9T2vNZ6YFxtc",
        description: "A 2D video game designed in java",
        link: "https://github.com/rhit-villencr/CSSE220-Final-Project",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/12366/12366717.png",
        description: "A mobile app for all of ones planning needs using typescript and react native",
        link: "https://github.com/avichaljadeja2002/omni-planner",
    },
];

const contactConfig = {
    YOUR_EMAIL: "chasevill@gmail.com",
    YOUR_FONE: "(978)866-3516",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    YOUR_SERVICE_ID: keys.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: keys.YOUR_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: keys.YOUR_PUBLIC_KEY,
};

const socialprofils = {
    github: "https://github.com/chasevill",
    linkedin: "https://www.linkedin.com/in/chase-villeneuve/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    activities,
    relatedClasses,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};