import { useRef } from "react";

export default function NewCard({ onClose, onAddPlaceSubmit }) {
  const titleRef = useRef();
  const linkRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({
      name: titleRef.current.value,
      link: linkRef.current.value,
    });
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Lugar"
          required
          type="text"
          ref={titleRef} // Vinculamos la referencia
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Link de la imagen"
          required
          type="url"
          ref={linkRef} // Vinculamos la referencia
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
