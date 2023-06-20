import Avatar from "../img/avatar.jpeg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/SideBar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Arthur Formiga' />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;









