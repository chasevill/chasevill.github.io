const keys = require('./keys.json');

const logotext = "CHASE";
const meta = {
    title: "Chase Villeneuve",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Chase Villeneuve",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about me",
    aboutme: `I am a senior Computer Science student at Rose-Hulman
              Institute of Technology`,
};
const worktimeline = [{
    jobtitle: "Test Technician",
    where: "SMTC",
    date: "2022 - current",
},
];

const skills = [{
    name: "Python",
    value: 80,
},
{
    name: "Java",
    value: 90,
},
{
    name: "Javascript",
    value: 75,
},
{
    name: "React",
    value: 65,
},
{
    name: "Racket",
    value: 55,
},
];

const dataportfolio = [{
    img: "https://picsum.photos/400/?grayscale",
    description: "A mobile app for all of ones planning needs using typescript and react native",
    link: "https://github.com/avichaljadeja2002/omni-planner",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "An app for managing of football statistics using mySQL and java",
    link: "https://github.com/rhit-villencr/CS333-FSM",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "A processor designed from the ground up with custom architecture",
    link: "https://github.com/rhit-csse232/rhit-csse232-2223a-project-v-2223a-03",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "A digital pantry app designed with firebase, html, js, and css",
    link: "https://github.com/rhit-csse280/winter-2022-2023-project-repo-m4-feeleynj-villencr",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "A custom linter for java projects capable of checking for design patterns, principles, and styles",
    link: "https://github.com/rhit-csse374/project-202420-s2-team03-202420",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "A 2D video game designed in java",
    link: "https://github.com/rhit-csse220/csse220-winter-2021-2022-final-project-w22_a_m03",
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
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};