import React, { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // Obtener usuario actual del contexto
  const currentUser = useContext(CurrentUserContext);

  // Definimos si soy el dueño (isOwn)
  const isOwn = (card.owner?._id || card.owner) === currentUser?._id;

  // Logica de los likes
  const isLiked =
    card.isLiked === true ||
    (Array.isArray(card.likes) &&
      card.likes.some((user) => user._id === currentUser._id));

  // Creamos la clase. Si no es nuestra, la ocultamos.
  const cardDeleteButtonClassName = `card__delete-button ${isOwn ? "" : "card__delete-button_hidden"}`;

  const cardLikeButtonClassName = `card__like-button ${isLiked ? "card__like-button_is-active" : ""}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name} // Usa el nombre de la tarjeta para el texto alternativo
        onClick={() => onCardClick(card)} // El trigger para abrir el popup con la tarjeta actual
      />

      {isOwn && (
        <button
          aria-label="Eliminar tarjeta"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick} // Conectando click de borrar
          type="button"
        />
      )}

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick} // Conectando click de Like 👍
        />
      </div>
    </li>
  );
}
