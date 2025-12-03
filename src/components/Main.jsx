import { useRef } from "react";
import Connect from "./Connect";
import Intro from "./Intro";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Main = () => {
  const connectRef = useRef(null);

  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Intro onScrollClick={scrollToConnect} />
      <Projects />
      <TechStack />
      <div ref={connectRef}>
        {" "}
        <Connect />
      </div>
    </>
  );
};
export default Main;
