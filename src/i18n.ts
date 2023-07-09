import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        login: "Login",
        username: "Username",
        password: "Password",
        log_in: "Log in",
        loginError:
          "Incorrect information entered, please enter correct information and try again",
        search: "Search",
        favorites: "Favorites",
        logout: "Logout",
        find: "Find",
        whatToShow: "What do you want to show?",
        searchVideo: "Search the video",
        delete: "Delete",
        openNewTab: "Open in new tab",
        addToFav: "Add to favorites",
        developed: "Developed by:",
        github: "my Github",
      },
    },
    ru: {
      translation: {
        login: "Вход",
        username: "Имя пользователя",
        password: "Пароль",
        log_in: "Войти",
        loginError:
          "Введены неправильные данные, введите правильные данные и повторите попытку",
        search: "Поиск",
        favorites: "Избранное",
        logout: "Выйти",
        find: "Найти",
        whatToShow: "Что хотите посмотреть?",
        searchVideo: "Поиск видео",
        delete: "Удалить",
        openNewTab: "Открыть в новой вкладке",
        addToFav: "Добавить в избранное",
        developed: "Разработал:",
        github: "мой Github",
      },
    },
    tm: {
      translation: {
        login: "Içeri girmek",
        username: "Ulanjynyň ady",
        password: "Gizlin açary",
        log_in: "Girmek",
        loginError:
          "Nädogry maglumat girizildi, dogry maglumatlary giriziň we gaýtadan synanyşyň",
        search: "Gözlemek",
        favorites: "Saýlananlar",
        logout: "Çykmak",
        find: "Gözlet",
        whatToShow: "Näme göresiňiz gelýär?",
        searchVideo: "Wideo gözlemek",
        delete: "Pozmak",
        openNewTab: "Täze penjirede açmak",
        addToFav: "Saýlananlara goşmak",
        developed: "Döreden:",
        github: "meniň Github-ym",
      },
    },
  },
});

export default i18n;
