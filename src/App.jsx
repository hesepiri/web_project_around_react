import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import Popup from "./components/Main/components/Popup/Popup";
import { useState, useEffect } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  // Levantamos el estado del popup de Main a App
  const [popup, setPopup] = useState(null);

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

  useEffect(() => {
    // 1. Definimos la función que escucha la tecla
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };

    // 2. Solo agregamos el oyente si hay un popup abierto
    if (popup) {
      document.addEventListener("keydown", handleEscClose);
    }

    // 3. Limpiamos el oyente cuando el popup se cierra o el componente se desmonta
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [popup]); // Se vuelve a ejecutar cada vez que 'popup' cambia

  // Funciones de control popups
  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  // Funcion para actualizar usuario
  const handleUpdateUser = (userData) => {
    api
      .setUserInfo(userData)
      .then((newData) => {
        setCurrentUser(newData); // Aqui se cierra el popup tras el exito!
        handleClosePopup(); // Cerramos el popup si todo salio bien
      })
      .catch((err) =>
        console.error("Error al actualizar datos del usuario", err),
      );
  };

  // Funcion para actualzar el avatar
  const handleUpdateAvatar = (avatarData) => {
    // Usamos el método updateAvatar que ya tienes en api.js
    api
      .updateAvatar(avatarData.avatar)
      .then((newAvatarData) => {
        setCurrentUser(newAvatarData); // Actualizamos el usuario con la nueva foto
        handleClosePopup(); // Cerramos el popup
      })
      .catch((err) =>
        console.error("Error al actualizar imagen del avatar:", err),
      );
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page__content">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
