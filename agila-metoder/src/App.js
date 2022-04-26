import "./App.css";
import HomePage from "./Pages/HomePage";
import FirstPage from "./Pages/Main";
import Quiz from "./Pages/Quiz";
import Manifest from "./Pages/AgileManifest";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/TopNav";
import LearnProcess from "./Pages/LearnProcess";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/main" element={<FirstPage />}></Route>
          <Route path="/manifest" element={<Manifest />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/learnProcess" element={<LearnProcess />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
