export default function Card(props) {
  // Desestructuramos el objeto card que viene desde las props
  const { name, link, isLiked } = props.card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name} // Usa el nombre de la tarjeta para el texto alternativo
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}
