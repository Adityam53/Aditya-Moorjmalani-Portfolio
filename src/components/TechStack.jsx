import {
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaNode,
  FaGithub,
} from "react-icons/fa";

import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiOpenai,
  SiAxios,
  SiSocketdotio,
  SiChartdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiVercel,
  SiSwagger,
  SiPython,
  SiFlask,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";

const TechStack = () => {
  const technologies = [
    // Core Frontend
    { id: 1, tech: "React", icon: SiReact },
    { id: 26, tech: "JavaScript", icon: SiJavascript },
    { id: 2, tech: "TypeScript", icon: SiTypescript },
    { id: 3, tech: "Redux Toolkit", icon: SiRedux },
    { id: 4, tech: "React Query", icon: SiReactquery },

    { id: 5, tech: "Node.js", icon: SiNodedotjs },
    { id: 6, tech: "Express.js", icon: SiExpress },
    { id: 23, tech: "Python", icon: SiPython },
    { id: 24, tech: "Flask", icon: SiFlask },

    { id: 7, tech: "MongoDB", icon: SiMongodb },
    { id: 8, tech: "Mongoose", icon: SiMongoose },
    { id: 9, tech: "JWT Authentication", icon: SiJsonwebtokens },
    { id: 10, tech: "REST APIs", icon: SiSwagger },

    // AI & Modern Integrations
    { id: 11, tech: "OpenAI SDK", icon: SiOpenai },
    { id: 12, tech: "OpenRouter", icon: SiSwagger },
    { id: 25, tech: "Google Antigravity", icon: LuBrainCircuit },

    { id: 13, tech: "Axios", icon: SiAxios },

    // Data & Realtime
    { id: 14, tech: "Socket.IO", icon: SiSocketdotio },
    { id: 15, tech: "Chart.js", icon: SiChartdotjs },

    // Styling
    { id: 16, tech: "Tailwind CSS", icon: SiTailwindcss },
    { id: 17, tech: "Bootstrap", icon: FaBootstrap },

    // Developer Tools
    { id: 18, tech: "Git", icon: FaGitAlt },
    { id: 19, tech: "GitHub", icon: FaGithub },
    { id: 20, tech: "Chrome DevTools", icon: SiGooglechrome },
    { id: 21, tech: "VS Code", icon: VscVscode },
    { id: 22, tech: "Vercel", icon: SiVercel },
  ];
  return (
    <div className="tech-stack">
      <div className="container">
        <h2 className="name">Skills & Technologies</h2>
        <h3 className="role">
          Building scalable full-stack applications with modern web technologies
        </h3>{" "}
        <div className="dash"></div>
        <div className="tech-flex">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-item">
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
