import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "pages/home/Home";
import Favorites from "pages/favorites/Favorites";
import Login from "pages/login/Login";
import NotFound from "pages/notFound/NotFound";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { useTranslation } from "react-i18next";
import { setLocalStorage } from "utils/setLocalStorage";

function App() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    savedTheme ? JSON.parse(savedTheme) : lightTheme
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const switchTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    setLocalStorage("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header switchTheme={switchTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound text={t("notFound")} />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
