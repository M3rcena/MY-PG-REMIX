class SimpleClickControl {
  constructor(options) {
    if (
      !options ||
      typeof options.callback !== "function"
    ) {
      throw new Error(
        '"callback" (function) is required'
      );
    }

    const { divClassName = "mapboxgl-ctrl mapboxgl-ctrl-group", className, name, callback } = options;

    this._container = document.createElement("div");
    this._container.className = divClassName;
    this._button = document.createElement("button");
    this._button.className = className || "mapboxgl-ctrl-icon";
    this._button.type = "button";
    this._span = document.createElement("span");
    this._span.className = "mapboxgl-ctrl-icon";
    name && (this._span.textContent = name);
    this._button.appendChild(this._span);
    this._container.appendChild(this._button);

    this._callback = callback;
  }

  onAdd(map) {
    this._map = map;

    this._button.addEventListener("click", this._callback);

    return this._container;
  }

  onRemove() {
    this._button.removeEventListener("click", this._callback);

    this._container.parentNode.removeChild(this._container);

    this._map = undefined;
  }
}

export default SimpleClickControl;
