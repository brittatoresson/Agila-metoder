import AllCards from "./allCards";
import "./App.css";
import HomePage from "./Pages/HomePage";
import FirstPage from "./Pages/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/main" element={<FirstPage />}></Route>
          {/* <Route path="/quiz" element={<Quiz />}></Route> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
