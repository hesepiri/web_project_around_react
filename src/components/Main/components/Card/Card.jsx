export default function Card({ card, onCardClick }) {
  const cardLikeButtonClassName = `card__like-button ${card.isLiked ? "card__like-button_is-active" : ""}`;

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
