export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" noValidate>
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
