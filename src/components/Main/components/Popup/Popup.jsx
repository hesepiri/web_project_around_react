export default function Popup(props) {
  const { onClose, title, children } = props;

  // Función para cerrar solo si se hace clic en el fondo oscuro
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div
        className={`popup__content ${
          !title ? "popup__content_type_image" : ""
        }`}
      >
        <button
          aria-label="Cerrar"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        {/* Renderizado condicional: si hay título, muéstralo */}
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
