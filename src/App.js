import { useState } from "react"

import Bar from "./components/Bar";
import Scatter from "./components/Scatter";

function App() {

  const [line, setLine] = useState()

  return (
    <>
      <Bar/>

      <Scatter/>
    </>
  );
}

export default App;
