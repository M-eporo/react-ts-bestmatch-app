import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Header from "./components/Header";

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
  };

  const handleDelete = () => {
    localStorage.removeItem("user-data");
    setLoggedIn(false);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")!);
    if(userData){
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
    <Header loggedIn={loggedIn} handleDelete={handleDelete}
    user={user}/>
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
      
    </Routes>
    </>
  );
};

export default App;