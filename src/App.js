import logo from './logo.svg';
import './App.css';
// import MainNavbar from "./Components/layout/mainSideBar/MainNavbar";
import PersistentDrawerLeft from "./Components/layout/mainSideBar/NavDrawer";
import MainScreen from "./Components/layout/mainSideBar/Main";

function App() {


  return (
    <div className="App">
      <MainScreen/>
      {/* <MainNavbar/> */}
      {/* <PersistentDrawerLeft/> */}
    </div>
  );
}

export default App;
