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

## 📝 Próximos Pasos

- Integración de la API oficial para persistencia de datos.
- Implementación de Context API para el manejo global del usuario.
- Adición de listeners globales para mejorar la UX (como el cierre con la tecla Esc).

---

**Desarrollado por Héctor Pinedo Proyecto estudiante del Bootcamp de Desarrollo Web de TripleTen.**

---
