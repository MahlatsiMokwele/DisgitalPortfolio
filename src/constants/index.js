import {
  // logo,
  creator,
  mobile,
  backend,
  fronted,
  angular,
  csharp,
  powerbi,
  // github,
  python,
  rust,
  sql,
  travis,
  vite,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  postgres,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  topcd,
  iec,
  sambe,
  geoint,
  sovtech,
  stefanutti,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: fronted,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "MicrosoftSQL",
    icon: sql,
  },
  {
    name: "Travis CI",
    icon: travis,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Stefanutti Stocks",
    icon: stefanutti,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Architecting and developing scalable web applications leveraging C# for robust backend services, ensuring high performance and adherence to the latest security protocols.",
      "Employing Angular Material to design intuitive, responsive user interfaces that provide an exceptional user experience and align with the sophisticated aesthetic standards of the engineering and construction sectors.",
      "Integrating a suite of Microsoft Power BI tools to transform business intelligence processes, enabling data-driven decision-making through custom dashboards and interactive reports that offer real-time insights.",
      "Automating complex workflows with Microsoft Power Automate, significantly improving operational efficiency by reducing manual tasks and enabling staff to focus on value-add activities.",
      "Working closely with project management teams to define requirements, set development milestones, and deliver solutions that address core business challenges.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SovTech (Client: Stefanutti Stocks)",
    icon: sovtech,
    iconBg: "#383E56",
    date: "September 2023 - February 2025",
    points: [
      "As a seasoned Full Stack Developer at SovTech, I specialize in crafting robust and scalable software solutions, currently servicing Stefanutti Stocks, a leading engineering and construction company.",
      "With a focus on delivering high-quality, end-to-end applications, my role encompasses the following:",
      "Developing and maintaining client-facing web applications using modern technologies including Angular Material and PowerBI, ensuring seamless user experiences and alignment with business goals.",
      "Collaborating with cross-functional teams to translate complex requirements into functional architecture and user-friendly interfaces.",
      "Providing ongoing support and iterative updates to meet evolving client needs in a dynamic business environment.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Stefanutti Stocks (Contracted via SovTech)",
    icon: stefanutti,
    iconBg: "#E6DEDD",
    date: "September 2023 - February 2025",
    points: [
      "Architecting and developing scalable web applications leveraging C# for robust backend services, ensuring high performance and adherence to the latest security protocols.",
      "Employing Angular Material to design intuitive, responsive user interfaces that provide an exceptional user experience and align with the sophisticated aesthetic standards of the engineering and construction sectors.",
      "Integrating a suite of Microsoft Power BI tools to transform business intelligence processes, enabling data-driven decision-making through custom dashboards and interactive reports that offer real-time insights.",
      "Automating complex workflows with Microsoft Power Automate, significantly improving operational efficiency by reducing manual tasks and enabling staff to focus on value-add activities.",
      "Working closely with project management teams to define requirements, set development milestones, and deliver solutions that address core business challenges.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Geo Inteligence Corp (GeoInt)",
    icon: geoint,
    iconBg: "#383E56",
    date: "January 2022 - August 2023",
    points: [
      "Delivering comprehensive software solutions that drive operational efficiency and client satisfaction.",
      "My role encompassed:",
      "Implementing rigorous software testing protocols to ensure the delivery of high-quality applications, resulting in reliable and stable software performance.",
      "Providing exceptional customer support by managing a robust ticketing system, effectively addressing and resolving issues to maintain high service standards.",
      "Applying advanced data analytics techniques to extract actionable insights, aiding in strategic decision-making and enhancing business intelligence capabilities.",
      "Executing efficient data engineering processes, overseeing the management of large datasets with PostgreSQL and PostGIS to ensure data integrity and accessibility.",
      "Facilitating seamless data distributions with tools such as Geoserver and QGIS, providing esteemed clients with precise and timely geospatial information.",
      "Streamlining deployment and monitoring workflows using Docker, Promtail, Prometheus, and Grafana, contributing to system optimization and real-time data visualization.",
      "Operating within Linux environments to enhance system performance and security, ensuring robust application deployment and management.",
      "Managing project lifecycles and team collaboration with project management tools like Jira and Monday.com, fostering an agile development culture and ensuring timely delivery of milestones.",
      "Utilizing Nginx for high-performance load balancing and reverse proxying, optimizing web server capabilities to handle large-scale user traffic.",
      "Employing version control with Git to maintain code integrity, facilitate team collaboration, and support continuous integration and deployment processes.",
      "Exploring innovative solutions with cutting-edge technologies like Rust for system programming and SQLite for embedded database services, demonstrating a commitment to staying at the forefront of technology advancements.",
      "My technical proficiency with Python, Rust, and an array of database and monitoring tools has been pivotal in developing solutions that align with the strategic goals of our clients and stakeholders.",
    ],
  },
  {
    title: "Intern",
    company_name: "Sambe Consulting",
    icon: sambe,
    iconBg: "#E6DEDD",
    date: "June 2021 - February 2022",
    points: [
      "A collaborative environment where mentorship and team engagement are central to our success.",
      "My contributions extend beyond code to shaping the fabric of our software development culture:",
      "Actively engage in mentorship, sharing knowledge and expertise with peers to elevate our collective capabilities and deliver software projects that make a marked difference in our field.",
      "Foster a team-based atmosphere that encourages open communication, shared responsibility, and a united approach to tackling complex software challenges.",
      "Embrace continuous personal and professional development, participating in comprehensive training programs designed to refine our craft and propel our team forward.",
      "Lead by example in professional growth, attending coaching sessions that focus on both technical and soft skills enhancement, ensuring well-rounded expertise within our team.",
      "Commit to excellence through certification pursuits, meticulously preparing for examinations to validate my skills and competencies in the latest technologies and methodologies.",
      "Proactively seek out opportunities for advancement, translating diligent preparation into meaningful employment opportunities that benefit both personal career goals and the company's strategic objectives.",
    ],
  },
  {
    title: "Sales Assistant & Assistant Manager",
    company_name: "TopCD Pty (Ltd)",
    icon: topcd,
    iconBg: "#E6DEDD",
    date: "June 2021 - February 2022",
    points: [
      "My career at TopCD Pty (Ltd) began as a Sales Assistant, where I quickly distinguished myself through a strong work ethic and dedication, culminating in a well-earned promotion to Assistant Manager. In this capacity, I am responsible for:",
      "Spearheading the accessories section, playing a pivotal role in not only driving sales but also enhancing customer satisfaction and loyalty.",
      "Skillfully managing cash operations and overseeing the point-of-sale system, ensuring accuracy and integrity in all transactions.",
      "Authorizing special sales scenarios, such as credit note issuances and transactions for senior citizens, displaying trust and responsibility bestowed upon me by the retail establishment.",
      "Demonstrating a keen expertise in merchandising, effectively showcasing products to maximize visibility and appeal, directly contributing to increased sales performance.",
      "Maintaining rigorous oversight of stock levels, conducting regular inventory checks, and signing off on stock movements to safeguard assets.",
      "Strategically executing sales initiatives to consistently meet and surpass monthly sales goals for the accessories category, contributing to the store's overall financial success.",
      "Managing the end-of-day closing procedures with precision, ensuring the store is secure and all records are updated accordingly, ready for the next business day.",
      "This journey has not only honed my ability to manage key retail operations but has also reinforced my commitment to leading by example and striving for excellence in every aspect of my role.",
    ],
  },
  {
    title: "Electoral Official",
    company_name: "Electoral Commission of South Africa (IEC)",
    icon: iec,
    iconBg: "#E6DEDD",
    date: "May 2014 - May 2014",
    points: [
      "During my tenure with IEC, I was entrusted with the critical responsibility of ensuring the integrity of the election process as a key member of the ballot verification and vote tabulation team. My role was characterized by:",
      "Performing the crucial function of ballot paper verification, a task that demanded the utmost attention to detail and a commitment to upholding electoral standards.",
      "Demonstrating unwavering professionalism and meticulousness in stamping ballot papers, ensuring every voters intent was accurately captured and secured.",
      "Conducting thorough and impartial vote counts, where my diligence was instrumental in the accurate tabulation of votes for each political party, reinforcing the democratic process.",
      "Upholding the principles of fairness and transparency throughout the election process, contributing to the public's trust in the electoral system.",
      "In this pivotal role, my actions were guided by a stringent adherence to procedural accuracy and ethical conduct, which were paramount in delivering a trustworthy election outcome.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "Mosebo",
    designation: "IEC Presiding Officer (2014)",
    company: "Electoral Commission of South Africa (IEC)",
    image: "",
  },
  {
    testimonial: "",
    name: "Annah Lamola",
    designation: "Former TopCD Manager",
    company: "TopCD Pty (Ltd)",
    image: "",
  },
  {
    testimonial: "",
    name: "Bongani Mondlane",
    designation: "Mentor",
    company: "Sambe Consulting",
    image: "",
  },
  {
    testimonial: "",
    name: "Kabelo Masemola",
    designation: "Mentor & Former CTO",
    company: "Sambe Consulting",
    image: "",
  },
  {
    testimonial: "",
    name: "Ravi Bhana",
    designation: "Mentor & Principal Consultant",
    company: "Sambe Consulting",
    image: "",
  },
  {
    testimonial: "",
    name: "Lee Annamalai",
    designation: "Former CTO",
    company: "Geo Inteligence Corp (GeoInt)",
    image: "",
  },
  {
    testimonial: "",
    name: "Derek Hohls",
    designation: "Senior Software Developer",
    company: "Geo Inteligence Corp (GeoInt)",
    image: "",
  },
  {
    testimonial: "",
    name: "Graeme McFerren",
    designation: "Lead Solutions Architect",
    company: "Geo Inteligence Corp (GeoInt)",
    image: "",
  },
];

const projects = [
  {
    name: "",
    description: "",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    // image: ,
    source_code_link: "", //githublink
  },
];

export { services, technologies, experiences, testimonials, projects };
