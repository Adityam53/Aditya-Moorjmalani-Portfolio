const Intro = ({ onScrollClick }) => {
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="name">Aditya Moorjmalani</h1>
          <h3 className="role">
            Full-Stack Developer • Building scalable web applications
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
              href="https://drive.google.com/file/d/1qVo4dJAhe8rLUCZm6rQPf_9TTRJUUsvi/view?usp=sharing"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
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
