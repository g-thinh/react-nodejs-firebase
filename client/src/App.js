import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const BASE_URL = "/hello";

async function getMessage() {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const data = await getMessage();
      setMessage(data.message);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
