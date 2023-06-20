import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

import "./styles/components/app.sass";

const App = () => {
  return (
    <div id='portfolio'>
      <h1>Arthur Formiga</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
