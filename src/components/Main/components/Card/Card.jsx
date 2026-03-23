import React, { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked =
    card.isLiked === true ||
    (Array.isArray(card.likes) &&
      card.likes.some((user) => user._id === currentUser._id));

  const cardLikeButtonClassName = `card__like-button ${isLiked ? "card__like-button_is-active" : ""}`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name} // Usa el nombre de la tarjeta para el texto alternativo
        onClick={() => onCardClick(card)} // El trigger para abrir el popup con la tarjeta actual
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className={cardLikeButtonClassName}
        />
      </div>
    </li>
  );
}
