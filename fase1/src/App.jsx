import { useState } from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import CarDetail from "./components/CarDetail/CarDetail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "home":
        return <Home />;
      case "CarForm":
        return <CarDetail currentPage={currentPage} />;
      case "CarsList":
        return <CarDetail currentPage={currentPage} />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div id="box">
      <nav id="navegacao">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("CarsList")}>Carros</button>
        <button onClick={() => setCurrentPage("CarForm")}>
          Adicionar Carro
        </button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
