import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



function NavSection() {
  return (
    <div className="topnav">
        <a className="active" > Portfolio</a>
        <a href="https://www.linkedin.com/in/rachel-philipose/"> LinkedIn</a>
        <a href="https://github.com/rachelphilipose"> GitHub</a>
      <a> 647-355-4175 </a>
    </div>
  );
}

export default NavSection;