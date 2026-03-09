export default function EditAvatar({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose?.(); // El ?. es por si acaso no se pasa la prop, no truene
  };

  return (
    <form
      className="popup__form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="avatar"
          type="url"
          placeholder="Link de la imagen"
          required
        />
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
