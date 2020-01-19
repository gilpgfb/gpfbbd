/* Declara la etiqueta "herramientas-abc" que se usa en "index.html" y
 * "usuarios.html". */
customElements.define("herramientas-abc", class extends HTMLElement {
  /** Se invoca al agregar este element a la página. */
  connectedCallback() {
    this.innerHTML =  /*html*/
      `<button id="agregar" type="button" onclick="agrega()">
        Agregar...
      </button>
      <button type="submit">Guardar</button>
      <button id="eliminar" type="button" onclick="elimina()">
        Eliminar
      </button>`;
  }
});