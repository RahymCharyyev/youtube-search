import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "pages/home/Home";
import Favorites from "pages/favorites/Favorites";
import Login from "pages/login/Login";
import NotFound from "pages/notFound/NotFound";
import Header from "components/header/Header";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
