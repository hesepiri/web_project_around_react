import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import avatar from "../../images/avatar.jpg";
import Popup from "./components/Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/ImagePopup/ImagePopup";

function Main() {
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.error("Error al obtener las tarjetas:", err);
      });
  }, []);

  function handleClosePopup() {
    setPopup(null);
  }

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onClose={handleClosePopup} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onClose={handleClosePopup} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onClose={handleClosePopup} />,
  };

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleCardClick(card) {
    const imagePopupConfig = {
      title: "",
      children: <ImagePopup card={card} />,
    };
    handleOpenPopup(imagePopupConfig);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            className="profile__image-edit-button"
            type="button"
            aria-label="Editar foto de perfil"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Rodolfo Neri Vela</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Astronauta</p>
        </div>

        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} /> // Pasamos la función a cada tarjeta
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
