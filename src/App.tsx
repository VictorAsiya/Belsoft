import "./App.css";
import All from "./components/RightSection/right";
import Sidebar from "./components/sidebar";
import * as SC from "./styles";

function App() {
  return (
    <SC.Main>
      <Sidebar />
      <All/>
    </SC.Main>
  );
}

export default App;
