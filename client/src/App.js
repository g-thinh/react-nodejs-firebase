import { useEffect, useState } from "react";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import logo from "./logo.svg";
import { getHello } from "./utils/api";

export default function App() {
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  const fetchGreeting = async () => {
    try {
      const data = await getHello();
      setMessage(data.message);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchGreeting();
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
