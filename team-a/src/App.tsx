import { useState } from "react";
import "./App.css";
import { Button } from "core";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Hello I am from team-a</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button />
    </>
  );
}
