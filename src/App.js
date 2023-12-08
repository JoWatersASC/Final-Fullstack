import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start";
import Navbar from "./pages/navbar";
import BasicForm from "./pages/forms/BasicForm";
import Game from "./pages/tictactoe/tictactoe";
import ParentComponent from "./pages/button/button";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/button" element={<ParentComponent />} />
        <Route path="/tictactoe" element={<Game />} />
        <Route path="/forms" element={<BasicForm />} />
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
