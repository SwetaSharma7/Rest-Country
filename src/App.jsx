import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="*" element={<h1 className="notFound">Invalid Request</h1>} />
      </Routes>
    </div>
  );
}

export default App;
