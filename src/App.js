import "./app.css"
import { FaFilter }  from "react-icons/fa"
import Bar from "./components/Bar";
import Scatter from "./components/Scatter";

function App() {



  return (
    <>
    <header></header>
    <main>
      <div id="text">
        <div>
          <h1>Dashboard</h1>
          <p>Desafio Técnico Frontend</p>
        </div>
        <button><FaFilter/><span>Filtrar</span></button>
      </div>
      <section>
        <Bar/>
        <Scatter/>
      </section>
    </main>
    </>
    
  );
}

export default App;
