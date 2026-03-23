import React, { useState, useEffect, useContext } from "react";
import api from "../../utils/api";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({ onOpenPopup, onClosePopup }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

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

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onClose={onClosePopup} />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onClose={onClosePopup} />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onClose={onClosePopup} />,
  };

  async function handleCardLike(card) {
    // Usamos la lógica blindada para saber si YA tiene like
    const isLiked =
      card.isLiked === true ||
      (Array.isArray(card.likes) &&
        card.likes.some((user) => user._id === currentUser?._id));

    //Enviamos la solicitud a la API (se le pasa !isLiked porque queremos el estado opuesto)
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then(
        //Mapeamos el estado actual y reemplazamos solo la tarjeta que fue modificada
        (newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c)),
          );
        },
      )
      .catch((err) => console.error("Error en Like:", err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        // Actualizamos el estado filtrando la tarjeta eliminada
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error("Error al eliminar la tarjeta:", err));
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt="Avatar"
          />
          <button
            className="profile__image-edit-button"
            type="button"
            aria-label="Editar foto de perfil"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>

        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={handleCardLike} // S15 - Nueva prop
              onCardDelete={handleCardDelete} // S15 - Nueva prop
            /> // Pasamos la función a cada tarjeta
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
