const about = {
  name: "Imran Issa",
  role: "Junior Software Developer",
  summary:
    "A highly motivated, passionate and skilled Junior Developer with expertise in Flutter, ReactJS, Python and Laravel.",
  resume: "https://example.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Imzissa",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/imran-issa",
    },
    // {
    //   name: "Mail",
    //   url: "issaimran94@gmail.com",
    // },
  ],
  description:
    "A developer who is always seeking a challenging position to contribute to the development of innovative and user-centric software solutions",
  greetingEmoji: "👋",
  aboutMe: `
  
Meet me, a Junior Developer who loves creating cool stuff with technology! I've been doing this for 3 years now and just finished my IT degree at university. I know Flutter, ReactJS, Python, and Laravel – some fancy tools for making websites and apps. I'm all about staying updated on what's new in tech, and I love solving problems. Ready to bring my energy and skills to a team and make awesome things happen!

Hey there! I'm a Junior Developer with three years of coding experience and a fresh Bachelor's degree in IT. I'm your go-to person for making things happen using Flutter, ReactJS, Python, and Laravel. I love turning ideas into reality through the magic of coding. Whether it's building sleek apps or crafting interactive websites, I'm all in. Let's connect and create something awesome together!
`,
};

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "issaimran94@gmail.com",
};

const projects = {
  main: [
    {
      thumbnail: "images/placeholder-image.jpeg",
      name: "QrCode Attendance",
      description:
        "A System that allows students to register for classes using a qrcode and allows lecturers to manage course registration and attendance. Additionally it allows the Head of Department to monitor the attendance of students, course attendance and lecturers' course attendance state.",
      stack: ["Laravel", "Livewire", "Tailwind", "MySQL"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      thumbnail: "images/placeholder-image.jpeg",
      name: "CropDoc",
      description:
        "An android application that uses machine learning and computer vision to detect crop diseases from captured crop images. The app works on Maize, Tomato and Cabbage and is able to detect diseases such as blight, black rot and maize rust.",
      stack: ["Flutter", "Tensorflow Lite", "Riverpod", "Firebase"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      thumbnail: "images/placeholder-image.jpeg",
      name: "Student Planner",
      description: [
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      ],
      stack: ["Flutter", "SQLite", "Provider"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      thumbnail: "images/placeholder-image.jpeg",
      name: "Projects Hub",
      description:
        "An Android application for students at the University of Lusaka to access Completed Final Year Projects",
      stack: ["Flutter", "Firebase", "Provider"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      thumbnail: "images/placeholder-image.jpeg",
      name: "Projects Hub Admin",
      description:
        "An React CMS application for administration at the University of Lusaka to add and manage final year projects for students.",
      stack: ["ReactJs", "Firebase", "Tailwind"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
  ],
  others: [
    {
      name: "iDefineit",
      url: "https://github.com/ImzIssa/iDefineIt-V2",
      code: "https://github.com/ImzIssa/iDefineIt-V2",
      description:
        "A chrome extension that provides definitions for words that a double-clicked on any web page",
      used: ["Js"],
    },
  ],
};

const skills = {
  languages: [
    "JavaScript (ES6)",
    "Python",
    "Dart",
    "PHP",
    "Java",
    "SQL",
    "TypeScript",
    "HTML",
    "CSS",
  ],
  frameworks: [
    "React",
    "Flutter",
    "Tailwind",
    "Laravel",
    "Django",
    "ExpressJs",
  ],
  tools: ["Bash", "Git & Github", "Postman", "MongoDB"],
  others: ["Linux", "Web Scraping", "Python Web Automation"],
  learning: ["Docker", "ExpressJs"],
};

const work = [
  {
    date: "2023-08-01",
    title: "Software Developer (Part-Time)",
    company: "eMsika Services Ltd",
    location: "Lusaka, Zambia",
    range: "Aug 2023 - Present",
    startDate: "2023-08-01",
    url: "https://www.upstatement.com/",
    activities: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    date: "2023-02-01",
    title: "Junior Developer (Intern)",
    company: "eMsika Services Ltd",
    location: "Lusaka, Zambia",
    range: "Feb 2023 - Jul 2023",
    startDate: "2023-02-01",
    endDate: "2023-07-01",
    url: "https://www.upstatement.com/",
    activities: [
      "Developed an Android Application using Flutter.",
      "Devloped a Web Application using ReactJS.",
      "Developed APIs in Laravel to support the Android Application.",
      "Managed and Maintained Firebase for the Flutter and React Applications.",
      "Contributed to the deployment of Web Application.",
      "Wrote clear, clean code for Flutter, Laravel and React Projects.",
      "Worked with Scrum methodology, Jira and Gitlab platform to accomplish project milestones and meet demanding timelines.",
      "Collaborated with project manager to select ambitious, but realistic milestones during early stages of development.",
      "Worked closely with team members to identify issues and provide suitable solutions.",
    ],
  },
];

// See object prototype on /types/section.ts page
const seoData = {
  title: "Imran Issa",
  // description: greetings.description,
  author: "Imran Issa",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "", //https://developer-portfolio-1hanzla100.vercel.app
  keywords: [
    "Imran",
    "Imran Issa",
    "Imran Phiri",
    "ImzIssa",
    "@ImzIssa",
    "@fka_imran",
    "Portfolio",
    "Imran Portfolio ",
    "Issa Portfolio ",
    "Imran Issa Portfolio",
  ],
};

export { about, projects, skills, contact, seoData, work };
