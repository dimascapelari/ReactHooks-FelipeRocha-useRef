import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");

  // Guardar uma informação de quantas vezes o componente foi renderizado
  /* const renders = useRef(0);

  useEffect(() => {
      renders.current = renders.current + 1;
    }); */

  // Referenciar algum elemento HTML
  /* const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }; */

  // Guardar o valor anterior de um state
  const previousName = useRef();

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello! My name is {name}</h2>
      {/* <h2>Renders: {renders.current}</h2> */}
      {/* <button onClick={focusInput}>Focus Input</button> */}
      <h2>And my name was {previousName.current}</h2>
    </div>
  );
}

export default App;
