import { FaRegEye, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Drip-District",
      summary:
        "A clean e-commerce app featuring smart search, filtering, categories, and a seamless cart, wishlist, and checkout flow.",
      img: "/homeimages/driphome.png",
      tech: ["React", "Node.js", "Express", "MongoDb"],
      demo: "https://drip-district-ru5c.vercel.app/",
      code: "https://github.com/Adityam53/DripDistrict.git",
    },
    {
      id: 2,
      name: "Anvaya",
      summary:
        "A modern CRM platform focused on efficient lead management, visual pipelines, automated reminders, and actionable analytics.",
      img: "/homeimages/anvayahome.png",
      tech: ["React", "Node", "Express", "MongoDb", "Chart.js"],
      demo: "https://anvaya-mauve.vercel.app/",
      code: "https://github.com/Adityam53/Anvaya.git",
    },
    {
      id: 3,
      name: "HireEdge",
      summary:
        "A place for people job seekers to apply and browse Jobs, recruiters to add new job openings or delete existing jobs.",
      img: "/homeimages/HireEdgehome.jpg",
      tech: ["React", "Node", "Express", "MongoDb"],
      demo: "https://hire-edge-portal.vercel.app/",
      code: "https://github.com/Adityam53/HireEdge.git",
    },
    {
      id: 4,
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
                  <div className="flex">
                    {proj.tech.map((t) => (
                      <span className="tech">{t}</span>
                    ))}
                  </div>
                  <div className="flex">
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
