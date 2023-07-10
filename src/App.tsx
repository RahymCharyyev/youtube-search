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

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const switchTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <>
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
    </>
  );
}

export default App;
