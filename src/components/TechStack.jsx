import {
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGooglechrome,
  SiVercel,
} from "react-icons/si";
import { VscSymbolMethod } from "react-icons/vsc";

const TechStack = () => {
  const technologies = [
    { id: 1, tech: "React", icon: FaReact },
    { id: 2, tech: "Tailwind CSS", icon: SiTailwindcss },
    { id: 3, tech: "Git", icon: FaGitAlt },
    { id: 4, tech: "Express", icon: SiExpress },
    { id: 5, tech: "Bootstrap", icon: FaBootstrap },
    { id: 6, tech: "Node.js", icon: FaNode },
    { id: 7, tech: "Mongoose", icon: SiMongoose },
    { id: 8, tech: "GitHub", icon: FaGithub },
    { id: 9, tech: "MongoDB", icon: SiMongodb },
    { id: 9, tech: "DevTools", icon: SiGooglechrome },
    { id: 9, tech: "VS Code", icon: VscSymbolMethod },
    { id: 9, tech: "Vercel", icon: SiVercel },
  ];
  return (
    <div className="tech-stack">
      <div className="container">
        <h2 className="name">Tech Stack</h2>
        <h3 className="role"> Tools and Technologies I work with</h3>
        <div className="dash"></div>
        <div className="tech-flex">
          {technologies.map((tech) => (
            <div className="tech-item">
              {tech.icon && <tech.icon size={30} color="#8b5cf6" />}
              <span>{tech.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
