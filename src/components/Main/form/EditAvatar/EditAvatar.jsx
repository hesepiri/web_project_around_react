import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar({ onClose }) {
  // Contexto
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  // Creamos la referencia
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
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
          ref={avatarRef} // Vinculamos el input a la referencia
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
