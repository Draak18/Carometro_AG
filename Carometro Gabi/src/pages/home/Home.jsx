import "./Home.css";
import Header from "../../components/header/Header.jsx";

function Home() {
  return (
    <div>
      <Header />
      <div className="fundoHome">
        <p id="carometroTitulo">CARÔMETRO</p>
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p1>macaco</p1>
      </div>
    </>
  );
}

export default Home;
