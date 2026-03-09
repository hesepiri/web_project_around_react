import React from "react";
import avatar from "../../images/avatar.jpg"; // Importamos el avatar aquí

function Main() {
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            className="profile__image-edit-button"
            type="button"
            aria-label="Editar foto de perfil"
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Cargando...</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__description">Cargando...</p>
        </div>

        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {/* Aquí irán las tarjetas más adelante */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
