import Link from "next/link";
import { FaGithubSquare, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    name: "home",
    link: "/"
  },
  {
    name: "about",
    link: "#about"
  },
  {
    name: "projects",
    link: "#projects"
  },
  {
    name: "contact",
    link: "#contact"
  }
];

export const projectsList = [
  {
    name: "Automated Navigation Drone",
    category: "Software",
    photo: "/project_img/adn.png",
    url: "https://ad-nav.github.io/adn/"
  },
  {
    name: "Soon",
    category: "Soon",
    photo: "/project_img/none.png",
    url: ""
  },
  {
    name: "Not available",
    category: "Not available",
    photo: "/project_img/none.png",
    url: ""
  },
  {
    name: "Not available",
    category: "Not available",
    photo: "/project_img/none.png",
    url: ""
  },
  {
    name: "Not available",
    category: "Not available",
    photo: "/project_img/none.png",
    url: ""
  },
  {
    name: "Not available",
    category: "Not available",
    photo: "/project_img/none.png",
    url: ""
  },
];

// contact
export const contact = [
  {
    title: 'Have A Question?',
    subtitle: 'Reach out to me.',
    description: 'Email me at databytemike@gmail.com',
    logo: <FaEnvelope />
  },
  {
    title: 'LinkedIn',
    subtitle: 'Can reach me here as well',
    description: 'www.linkedin.com/in/michaelgourdine',
    logo: <Link href="https://www.linkedin.com/in/michaelgourdine/" target="_blank"><FaLinkedin  /></Link>
  },
];

export const social = [
  {
    logo: <Link href="https://www.linkedin.com/in/michaelgourdine/" target="_blank"><FaLinkedin className="w-8 h-8 text-accent-hover" /></Link>
  },
  {
    logo: <Link href="https://github.com/DataByteMike" target="_blank"><FaGithubSquare className="w-8 h-8 text-accent-hover"  /></Link>
  }
];
