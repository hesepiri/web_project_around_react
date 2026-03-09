export default function Popup(props) {
  const { onClose, title, children } = props;

  // Función para cerrar solo si se hace clic en el fondo oscuro
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__content">
        <button
          aria-label="Cerrar"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
