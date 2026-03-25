import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  // Levantamos el estado del popup de Main a App
  const [popup, setPopup] = useState(null);

  // Levantamos el estado de las cards de Main a App
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario: ", err);
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
        console.error("Error al actualizar datos del usuario: ", err),
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
        console.error("Error al actualizar imagen del avatar: ", err),
      );
  };

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => setCards(initialCards))
      .catch((err) => console.error("Error al obtener las tarjetas: ", err));
  }, []);

  // Función blindada para dar Like (ahora vive en App)
  async function handleCardLike(card) {
    const isLiked =
      card.isLiked === true ||
      (Array.isArray(card.likes) &&
        card.likes.some((user) => user._id === currentUser?._id));

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c)),
        );
      })
      .catch((err) => console.error("Error en Like: ", err));
  }

  // Función para borrar tarjeta (ahora vive en App)
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((err) => console.error("Error al eliminar la tarjeta:", err));
  }

  // Función para agregar una tarjeta
  function handleAddPlaceSubmit(cardData) {
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]); // Magia: ponemos la nueva tarjeta al inicio del arreglo
        handleClosePopup(); // Cerramos el popup
      })
      .catch((err) => console.error("Error al agregar tarjeta:", err));
  }

  function handleCardClick(card) {
    setPopup({
      title: "", // En el popup de imagen el título suele ir abajo, no arriba
      isImage: true, // Esta bandera nos ayudará a quitar el fondo blanco
      children: (
        <>
          <img src={card.link} alt={card.name} className="popup__image" />
          <p className="popup__caption">{card.name}</p>
        </>
      ),
    });
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page__content">
        <Header />
        <Main
          popup={popup}
          cards={cards}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
