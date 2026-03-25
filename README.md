# Around The U.S. (React + Vite) ✨ - Sprint 15

Esta es una aplicación interactiva construida con **React** que permite a los usuarios compartir fotos de sus viajes, personalizar su perfil y dar "Me gusta" a las publicaciones de otros. Este proyecto forma parte del **Sprint 15** de TripleTen, donde se implementaron conceptos avanzados de React.

## 🚀 Características

- **Gestión de Perfil:** Edición de nombre, descripción y cambio de avatar mediante formularios controlados y `useRef`.
- **Interacción con Tarjetas:** Los usuarios pueden agregar nuevas tarjetas, eliminarlas y alternar el estado de "Like".
- **Estado Global:** Implementación de `CurrentUserContext` para compartir datos del usuario en toda la aplicación sin _prop drilling_.
- **Cierre Inteligente:** Los popups se pueden cerrar mediante la tecla `Esc`, clics en el overlay o el botón de cierre.
- **API Real:** Conexión completa con un servidor para persistir cambios y obtener datos iniciales.

## 🛠️ Tecnologías y Conceptos

- **React (Vite):** Entorno de desarrollo rápido y moderno.
- **Hooks:** Uso intensivo de `useState`, `useEffect` y `useRef`.
- **Context API:** Levantamiento de estado (_Lifting State_) y provisión de contexto global.
- **Programación Asíncrona:** Manejo de promesas con `fetch`, `.then()` y `.catch()`.
- **Metodología BEM:** Organización de estilos CSS escalable.

## 📂 Estructura del Proyecto

```text
src/
 ├── components/       # Componentes de la UI (App, Main, Card, Popups, etc.)
 ├── contexts/         # Contexto de usuario global
 ├── utils/            # Clase Api y utilerías
 ├── images/           # Recursos visuales
 └── main.jsx          # Punto de entrada
```

## 🛠️ Instalación y Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/hesepiri/around-react.git

   ```

2. **Instala las dependencias necesarias:**

   ```bash
   npm install
   ```

3. **Inicia el entorno de desarrollo:**

   ```bash
   npm run dev
   ```

---

## 🧠 Aprendizajes (Sprint 15)

Durante este sprint, se refactorizó la aplicación para mover la lógica de negocio al componente raíz (App.jsx). Se aprendió a:

- Implementar el patrón de Lifting State para centralizar el control de datos.
- Utilizar Context API para suscribir múltiples componentes a datos dinámicos.
- Manejar flujos de datos complejos entre la API y la interfaz de usuario.
- Gestionar referencias directas al DOM mediante useRef para optimizar formularios de una sola entrada.

---

## 🔗 Demo en vivo
[Haz clic aquí para ver la aplicación](https://hesepiri.github.io/web_project_around_react/)
 
---

## Sprint Previo...

# Around the U.S. (React) - Sprint 14

Esta es la primera fase de la transición del proyecto **Around the U.S.** de Vanilla JavaScript a **React**. En este sprint, el enfoque principal fue la descomposión de la interfaz en componentes funcionales y la gestión de estados para la interactividad.

---

## 🚀 Tecnologías y Conceptos Aplicados

- **React.js**: Biblioteca base para construir la interfaz.
- **Vite**: Herramienta de construcción y servidor de desarrollo.
- **Componentes Funcionales**: Creación de piezas reutilizables como `Header`, `Main`, `Footer`, `Popup` y `Card`.
- **Hooks de Estado (`useState`)**: Implementación de lógica para la apertura y cierre de ventanas emergentes (popups).
- **Props y Desestructuración**: Paso de datos y funciones entre componentes padres e hijos.
- **Renderizado de Listas**: Uso del método `.map()` para generar dinámicamente la cuadrícula de tarjetas a partir de datos ficticios.

---

## ✨ Características de este Sprint

- **Interfaz Modular**: Toda la página ha sido refactorizada en componentes de React.
- **Popups Funcionales**:
  - Edición de perfil.
  - Adición de nuevas tarjetas.
  - Cambio de avatar (con el perfil de **Rodolfo Neri Vela**).
  - Visualización de imágenes en pantalla completa.
- **Experiencia de Usuario (UX)**: Los popups cuentan con cierre funcional mediante el botón de cerrar (X), el botón de enviar formulario y haciendo clic en el área del overlay (fondo oscuro).
- **Lógica de Cierre**: Los popups se cierran mediante el botón de cerrar, haciendo clic en el overlay o mediante funciones pasadas por props.
- **Estilos CSS**: Integración de los archivos CSS existentes mediante importaciones en los componentes correspondientes siguiendo la metodología BEM.

---

## 🔗 Demo en vivo
[Haz clic aquí para ver la aplicación](https://hesepiri.github.io/web_project_around_react/)
 
---

**Desarrollado por Héctor Pinedo Proyecto estudiante del Bootcamp de Desarrollo Web de TripleTen.**

---
