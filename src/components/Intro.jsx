const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="name">Aditya Moorjmalani</h1>
          <h3 className="role">full stack dev</h3>
          <div className="dash"></div>
          <p className="description">
            MERN-stack developer who loves building smooth, user-friendly
            interfaces and reliable backend systems—all with clean,
            easy-to-maintain code.
          </p>
          <p className="description">
            I specialize in React, Node.js, and MongoDB to build apps that scale
            well and actually feel good for people to use.
          </p>
          <div className="flex">
            <a href="" className="contact-btn">
              Contact Me
            </a>
            <a href="" className="resume-btn">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
