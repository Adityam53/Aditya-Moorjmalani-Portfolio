const Intro = ({ onScrollClick }) => {
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="name">Full-Stack Developer </h1>
          <h3 className="role">
            Building scalable web applications with React, Node.js, Express,
            MongoDB, and AI integrations.
          </h3>{" "}
          <div className="dash"></div>
          <p className="description">
            Full-stack MERN developer focused on building scalable,
            user-friendly web applications with modern technologies and clean
            architecture.
          </p>
          <p className="description">
            Passionate about turning ideas into impactful digital products.
          </p>
          <div className="flex">
            <a onClick={onScrollClick} className="contact-btn">
              Contact Me
            </a>
            <a
              href="./Aditya_Moorjmalani_Resume_ex.pdf"
              download="Aditya_Moorjmalani_Resume_ex.pdf"
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
