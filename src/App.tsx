import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Header from "./components/Header";
import SearchDetailed from "./pages/SearchDetaild";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,   
    });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user-data", JSON.stringify(user));
    setLoggedIn(true);
    navigate("/search");
  };

  const handleDelete = () => {
    localStorage.removeItem("user-data");
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")!);
    if(userData){
      setLoggedIn(true);
    }
    if(userData){
      setUser(userData);
    }
  }, []);

  return (
    <>
    <Header loggedIn={loggedIn} handleDelete={handleDelete}
    user={user}/>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<h1>ページがありません。</h1>}/>
      <Route
        path="/register"
        element={
          <Register
            handleChange={handleChange}
            handleRegister={handleRegister}
          />
        }/>
      {loggedIn && <Route path="/search" element={<Search/>}/>}
      {loggedIn && <Route path="/search-detailed" element={<SearchDetailed/>}/>}
      
    </Routes>
    </main>
    </>
  );
};

export default App;