import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/arthur-formiga-00436b25b/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/arthurformiga",
  },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.url} target="blank" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
