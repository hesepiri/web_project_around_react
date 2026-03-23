import React, { useContext } from "react";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({
  onOpenPopup,
  onClosePopup,
  cards, // Recibe las tarjetas del "boss" App
  onCardLike, // Recibe la funcion del "boss" App
  onCardDelete, // Recibe la funcion del "boss" App
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: (
      <NewCard onClose={onClosePopup} onAddPlaceSubmit={onAddPlaceSubmit} />
    ),
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onClose={onClosePopup} />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onClose={onClosePopup} />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        {/* AVATAR */}
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

        {/* INFO DEL USUARIO */}
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

        {/* BOTÓN DE AGREGAR TARJETA */}
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
              onCardLike={onCardLike} // S15 - Nueva prop
              onCardDelete={onCardDelete} // S15 - Nueva prop
            /> // Pasamos la función a cada tarjeta
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
