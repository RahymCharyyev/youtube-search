import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Favorites from "pages/Favorites";
import Login from "pages/login/Login";
import NotFound from "pages/notFound/NotFound";
import Header from "components/header/Header";

function App() {
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
