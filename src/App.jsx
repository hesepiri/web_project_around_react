import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [currentUSer, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }, []); //Se ejecuta solo una vez al montar el componente

  return (
    <CurrentUserContext.Provider value={currentUSer}>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
