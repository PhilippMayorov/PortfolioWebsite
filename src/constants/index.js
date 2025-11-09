import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  typescript,
  nodejs,
  docker,
  python,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  aws,
  westernIcon,
  stephenLewisLogo,
  AibacklinkerIcon,
  taycoIcon,
  fetchaiIcon,
  UottaHacksIcon,
  wfnIcon,
  aibacklinker,
  petpals,
  realestatescraper,
  camphaven,
  Iris,
  AiContributer,
  freeSpotifyIcon,
  uottahacksGroupPicture,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Qualifications',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'extracurricular',
    title: 'Extracurricular',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Entrepreneur',
    icon: web,
  },
  {
    title: 'Software Engineer',
    icon: mobile,
  },
  {
    title: 'Indie Hacker',
    icon: backend,
  },
  {
    title: 'Prompt Engineer',
    icon: fullstack,
  },
]

const education = [
  {
    title: 'Honours Specialization in Computer Science',
    company_name: 'University of Western Ontario',
    icon: westernIcon,
    iconBg: '#fff',
    date: '2023-2027',
    link: 'https://www.uwo.ca/',
    points: [
      'GPA: 3.7/4.0',
      'Courses Taken: Data Structures and Algorithms, Machine Learning, Operating Systems, Database Management Systems, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Cloud Computing, Analysis and Design of Algorithm, Artificial Intelligence, Data Science',
      'Extracurricular Activities: Projects director of Western Founders Network, Quant Developer at Western Algorithmic Club, Boxer at Bushido Boxing club ',
    ],
  },
  {
    title: 'High School',
    company_name: 'Stephen Lewis Secondary School',
    icon: stephenLewisLogo,
    iconBg: '#fff',
    date: '2019-2023',
    // link: 'https://stephenlewis.ycdsb.ca/',
    points: [
      'Grades: 95% Average',
      'Extracurricular Activities: President of Computer Science Club, Co-founder of Finance-Business Club, Team Captain and MVP of School Wrestling Team',
    ],
  },
  // {
  //   title: 'Senior Secondary',
  //   company_name: 'Samaritan Senior Secondary School-CBSE',
  //   icon: samaritans,
  //   iconBg: '#fff',
  //   date: '2016-2017',
  //   points: [
  //     'Courses undertaken: Science, Social Studies, Languages and Mathematics.',
  //     'CGPA: 10/10',
  //   ],
  // },
]

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws,
  },
]

const experiences = [
  {
    title: 'Co-Founder & CEO',
    company_name: 'Ai Backlinker',
    icon: AibacklinkerIcon,
    iconBg: '#fff',
    date: 'May 2025 - present',
    points: [
      'Launched and scaled a profitable SaaS startup to $1,000+ MRR that helps businesses rank higher on Google by securing high-authority backlinks from major news outlets like Forbes, USA Today, and over 100 others ',
      'Built a full-stack SaaS application in a team setting using Wasp (React, Node.js, Prisma), which automated client onboarding, user authentication, and subscription payments.',
      'Engineered a custom web scraper and outreach bot using Puppeteer.js, capable of bypassing CAPTCHA challenges, automating account creation, logins, and reachout to publishers on platforms like HARO (Help A Reporter Out), and Featured.com.',
    ],
    link: 'https://aibacklinker.io/',
  },
  {
    title: 'Data Engineer',
    company_name: 'Tayco Inc.',
    icon: taycoIcon,
    iconBg: '#fff',
    date: 'April 2024 - August 2024',
    points: [
      'Collaborated in a team setting to model furniture production workflow using Excel and updated production workflow data into the Jeeves ERP system, increasing production operation and inventory count efficiency by 200%.',
      'Wrote complex SQL queries from the ERP database using SQL Server to query data on product bill of material (BOM) and manufacturing operations, which facilitated the modelling and creation of efficient furniture manufacturing workflows',
      "Created a communication platform to reduce communication latency between purchasing, inventory, and warehouse departments using SQL, Excel, Power BI and Smartsheet's integrated APIs.",
    ],
  },
]

const extracurricular = [
  {
    title: '1st Place Hackathon Winner at Dearborn Hacks - iris',
    header: '($1250 Prize + Interview Opportunity)',
    icon: fetchaiIcon,
    iconBg: '#000000',
    date: 'October 2025',
    points: [
      'Won 1st Place for Best Use Case of Fetch.ai developing Iris, a voice-activated AI assistant that autonomously executes multi-step tasks using Fetch.ai’s uAgents framework.',
      'Designed and deployed four autonomous agents using Fetch.ai’s ecosystem, integrated with Gmail, Google Calendar, and Slack via voice commands',
      'Leveraged ElevenLabs, Google Gemini, and ASI:One LLM to build a reasoning pipeline that translates natural speech into real-world actions, enabling seamless productivity automation.',
    ],
    link: 'https://devpost.com/software/iris-289wtl',
  },
  {
    title: '1st Place Hackathon Winner at Uottahacks - LeadToLED',
    header: '(Seeed Studio Hardware kit + $500 Prize)',
    icon: UottaHacksIcon,
    iconBg: '#050C18',
    date: 'Feb 2024',
    points: [
      'Developed a digital pen tracking system using an MPU-6050 sensor and ESP32 microcontroller, enabling real-time motion capture of handwritten input, which was visualized and stored via a MongoDB-backed Python application.',
      'Integrated accelerometer and gyroscope sensors with a PyMongo backend and developed an interactive data visualization dashboard using Streamlit.',
    ],
    credential: 'https://github.com/PhilippMayorov/LeadToLED',
  },
  {
    title: 'WFN Project Director (1 of 16 from 250+ applicants)',
    header: 'CLASSVOICE AI: Real-Time Student Participation Tracker',
    icon: wfnIcon,
    iconBg: '#000000',
    date: 'September 2024 - April 2025',
    points: [
      'Collaborated in a 4-member development team to deploy a voice recognition AI that accurately identifies and evaluates student participation in Business class.',
      'Integrated OpenAI Whisper and SpeechRecognition libraries to transcribe and analyze student speech, assigning contribution scores and logging individual participation metrics.',
    ],
    link: 'https://github.com/PhilippMayorov/Ai-Contributor',
  },
]

const projects = [
  {
    name: 'Ai Backlinker',
    description:
      'Ai Backlinker is a SaaS platform that I scaled to $1000/month and growing helps businesses improve their search engine rankings by securing high-authority backlinks from major news outlets. The platform automates the outreach process, making it easier for businesses to connect with publishers and acquire valuable backlinks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'Puppeteer.js',
        color: 'pink-text-gradient',
      },
    ],
    image: aibacklinker,
    source_code_link: 'https://aibacklinker.io',
    live_project_link: 'https://aibacklinker.io',
  },
  {
    name: 'iris - (1st Place Dearborn Hacks)',
    description:
      'Siri sucks. we did our best to make it better. iris is an AI assistant that listens to your voice and automatically completes tasks like sending emails, checking your calendar, or playing music. You talk to it like a person, and it gets things done for you in seconds.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fetch.ai Uagents',
        color: 'green-text-gradient',
      },
      {
        name: 'AS1:One LLM',
        color: 'pink-text-gradient',
      },
      {
        name: 'AgentVerse',
        color: 'green-text-gradient',
      },
    ],
    image: Iris,
    source_code_link: 'https://github.com/philippmayorov/PG_Life',
    // live_project_link: 'https://github.com/philippmayorov/PG_Life',
  },
  {
    name: 'Leading to LED - (1st Place Uottahacks)',
    description:
      'Designed a digital pen that records your writing movements in real time and visualizes them on an interactive app, turning physical handwriting into digital data.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'PyMongo',
        color: 'green-text-gradient',
      },
      {
        name: 'MPU-6050 sensor',
        color: 'pink-text-gradient',
      },
      {
        name: 'ESP32 microcontroller',
        color: 'blue-text-gradient',
      },
    ],
    image: uottahacksGroupPicture,
    source_code_link: 'https://github.com/PhilippMayorov/LeadToLED',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
  {
    name: 'AI Contribution Tracker ',
    description:
      'As a selected 1 of 16 out of +250 Applicants to be a projects director at Western Founders Network, my team built a classroom participation monitoring system designed specifically for business professors. This application leverages advanced speech recognition and AI technology to automatically track and evaluate student participation.',

    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Whisper API',
        color: 'green-text-gradient',
      },
      {
        name: 'Mongo DB',
        color: 'pink-text-gradient',
      },
    ],
    image: AiContributer,
    source_code_link: 'https://github.com/PhilippMayorov/Ai-Contributor',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
  {
    name: 'Free Spotify Downloader',
    description:
      'A spotify music downloader that allows users to download songs, albums, and playlists from Spotify in high-quality MP3 format for offline listening.',

    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Whisper API',
        color: 'green-text-gradient',
      },
      {
        name: 'Mongo DB',
        color: 'pink-text-gradient',
      },
    ],
    image: freeSpotifyIcon,
    source_code_link: 'https://github.com/PhilippMayorov/Ai-Contributor',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
  {
    name: 'Pet Simulator game made in Java',
    description:
      'Pet Pals is a virtual pet simulation game developed in Java using Java Swing. The game allows users to interact with a digital pet by feeding it, giving it gifts, and monitoring its health and happiness.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
    ],
    image: petpals,
    source_code_link: 'https://github.com/PhilippMayorov/PetPals',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
  {
    name: 'Student Real Estate Scraper (Helps student find best housing deals)',
    description:
      'Built a real estate web scraper that gathers listings from multiple sites to help students find the most affordable housing options based on their preferred location.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Beautiful Soup',
        color: 'green-text-gradient',
      },
      {
        name: 'Olama 3.3 LLM',
        color: 'pink-text-gradient',
      },
    ],
    image: realestatescraper,
    source_code_link: 'https://github.com/PhilippMayorov/RealEstateScraper',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
  {
    name: 'Camp Haven (Kijiji but for Campsite)',
    description:
      'Camp Haven is a platform that connects campsite owners with people looking for a place to camp. Users can browse and book campsites, while owners can list their properties and manage bookings  .',
    tags: [
      {
        name: 'Html & CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootsrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'MapBox API for Maps',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
    ],
    image: camphaven,
    source_code_link: 'https://github.com/PhilippMayorov/Camp-Haven',
    // live_project_link: 'https://sorting-visuallizer.netlify.app/',
  },
]

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
}
