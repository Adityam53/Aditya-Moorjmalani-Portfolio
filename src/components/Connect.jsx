import { FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";

const Connect = () => {
  const connections = [
    {
      id: 1,
      name: "Email",
      value: "adityamoorjmalani53@gmail.com",
      icon: FaMailBulk,
      link: "mailto:adityamoorjmalani53@gmail.com",
    },
    {
      id: 2,
      name: "LinkedIn",
      value: "Connect on LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aditya-moorjmalani-312871246/",
    },
    {
      id: 3,
      name: "GitHub",
      value: "Follow on GitHub",
      icon: FaGithub,
      link: "https://github.com/Adityam53/",
    },
    {
      id: 4,
      name: "Code Sandbox",
      value: "My Coding Journey",
      icon: SiCodesandbox,
      link: "https://codesandbox.io/u/adityamoorjmalani53",
    },
  ];
  return (
    <div className="connect">
      <div className="container">
        <h2 className="name">Connect</h2>
        <h3 className="role">
          Excited to create something impactful with you.
        </h3>
        <div className="dash"></div>
        <div className="connection-flex">
          {connections.map((conn) => (
            <a
              href={conn.link}
              key={conn.id}
              target="_blank"
              rel="noopener noreferrer"
              className="connection-card"
            >
              {" "}
              <div className="col">
                <div className="connections">
                  {conn.icon && <conn.icon size={40} color="#8b5cf6" />}
                  <p className="connection-name">{conn.name}</p>
                </div>
                <div className="connection-value">{conn.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
