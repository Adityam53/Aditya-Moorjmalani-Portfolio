import { FaRegEye, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "matargashti-AI travel planner",
      summary:
        "A full-stack AI-powered travel planner that generates personalized itineraries using OpenRouter and AI models via the OpenAI SDK, built with React, React Query, Node.js, and Express.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Open-Router",
        "OpenAI",
        "React-Query",
      ],
      demo: "https://voyara-ai-travel-planner.vercel.app/",
      code: "https://github.com/Adityam53/matargashti-AI-travel-planner",
    },
    {
      id: 2,
      name: "workasana",
      summary:
        "A full-stack task manager web app with authentication, task, project, and team management, featuring sorting, filtering, and grouped task views, built using React, Node.js, Express, MongoDB, and JWT.",
      img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
      tech: ["React", "Node.js", "Express", "MongoDb"],
      demo: "https://work-asana.vercel.app/",
      code: "https://github.com/Adityam53/WorkAsana",
    },
    {
      id: 3,
      name: "learnest",
      summary:
        "A School Management web-application developed using MERN stack with Redux toolkit and TypeScript. Student management, teacher management and class management with sorting and filtering features and CRUD Operations.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww",
      tech: ["React", "Node.js", "Express", "MongoDb", "Redux-toolkit"],
      demo: "https://lern-nest.vercel.app/",
      code: "https://github.com/Adityam53/LernNest",
    },
    {
      id: 4,
      name: "Drip-District",
      summary:
        "A clean e-commerce app featuring smart search, filtering, categories, and a seamless cart, wishlist, and checkout flow.",
      img: "/homeimages/driphome.png",
      tech: ["React", "Node.js", "Express", "MongoDb"],
      demo: "https://drip-district-ru5c.vercel.app/",
      code: "https://github.com/Adityam53/DripDistrict.git",
    },
    {
      id: 5,
      name: "Anvaya",
      summary:
        "A modern CRM platform focused on efficient lead management, visual pipelines, automated reminders, and actionable analytics.",
      img: "/homeimages/anvayahome.png",
      tech: ["React", "Node", "Express", "MongoDb", "Chart.js"],
      demo: "https://anvaya-mauve.vercel.app/",
      code: "https://github.com/Adityam53/Anvaya.git",
    },
    {
      id: 6,
      name: "HireEdge",
      summary:
        "A place for people job seekers to apply and browse Jobs, recruiters to add new job openings or delete existing jobs.",
      img: "/homeimages/HireEdgehome.jpg",
      tech: ["React", "Node", "Express", "MongoDb"],
      demo: "https://hire-edge-portal.vercel.app/",
      code: "https://github.com/Adityam53/HireEdge.git",
    },
    {
      id: 7,
      name: "Meet-Sync",
      summary:
        "A place for people to explore upcoming events and meetups, get a detailed view of the meetups for a smoother event experence.",
      img: "/homeimages/meethome.png",
      tech: ["React", "Node", "Express", "MongoDb"],
      demo: "https://meet-sync-front-end-sandy.vercel.app/",
      code: "https://github.com/Adityam53/MeetSync_Front-End.git",
    },
  ];
  return (
    <>
      <div className="projects">
        <div className="container">
          <h2 className="name">Projects</h2>
          <h3 className="role">
            {" "}
            Building smooth and user-friendly interfaces
          </h3>
          <div className="dash"></div>
          <div className="projects-flex">
            {projects.map((proj) => (
              <div className="proj-card">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <img className="proj-img" src={proj.img} alt="" />
                </a>
                <div className="card-info">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    <h3 className="proj-name"> {proj.name}</h3>
                  </a>
                  <p className="project-descr">{proj.summary}</p>
                  <div className="tech-list">
                    {proj.tech.map((t) => (
                      <span className="tech">{t}</span>
                    ))}
                  </div>
                  <div className="demo-flex">
                    <a
                      className="icon-flex"
                      rel="noopener noreferrer"
                      href={proj.demo}
                      target="_blank"
                    >
                      <FaRegEye /> Demo
                    </a>
                    <a
                      className="icon-flex"
                      rel="noopener noreferrer"
                      href={proj.code}
                      target="_blank"
                    >
                      <FaCode />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
