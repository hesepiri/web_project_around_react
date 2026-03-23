import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");

  // Efecto para que al abrir el popup se muestre con datos
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); // Queremos que este monitoreando los cambios en currentUser

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
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
          value={name}
          onChange={handleNameChange}
          placeholder="Nombre"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          value={description}
          onChange={handleDescriptionChange}
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
