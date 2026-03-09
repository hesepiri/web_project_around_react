export default function EditProfile() {
  return (
    <form className="popup__form" name="profile-form" noValidate>
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
