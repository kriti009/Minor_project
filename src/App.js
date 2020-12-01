import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import MainNavbar from "./Components/layout/mainSideBar/MainNavbar";
import PersistentDrawerLeft from "./Components/layout/mainSideBar/NavDrawer";
import MainScreen from "./Components/layout/mainSideBar/Main";

function App() {


  return (
    <div className="App">
      <MainScreen/>
      {/* <MainNavbar/> */}
      {/* <PersistentDrawerLeft/> */}
=======
import MainSidebar from "./Components/layout/mainSideBar/MainSidebar";

function App() {
  return (
    <div className="App">
      <MainSidebar/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

>>>>>>> 9b6fd6d025238c7d8a6c4756586064c1004a0440
    </div>
  );
}

export default App;
