export default function EditProfile({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose?.(); // El ?. es por si acaso no se pasa la prop, no truene
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="name"
          placeholder="Nombre"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          name="about"
          placeholder="Acerca de mí"
          required
        />
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
