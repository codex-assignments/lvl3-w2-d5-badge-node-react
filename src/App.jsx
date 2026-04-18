import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer,";
import Navbar from "./components/Navbar";
import { getData } from "./utils/fetchData";

function App() {
  const [firstName, setFirstName] = useState("");
  //default state to falsey version typically
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  if (!firstName) setFirstName("Bob");

  useEffect(() => {
    getData(setUsers);
  }, []);

  return (
    <>
      {console.log(users)}
      <Header name={firstName} />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
