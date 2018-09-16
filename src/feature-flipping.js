class FeatureFlipping extends HTMLElement {

  static get observedAttributes() {
    return ['active'];
  }

  linkPanels() {}

  ifActive() {}

  connectedCallback() {
    this.textContent = 'Juste un élément de base.';
    Promise.all([
        customElements.whenDefined('if-true'),
        customElements.whenDefined('if-false'),
      ])
      .then(_ => this.linkPanels());

  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === "active") {
      IF(newValue, this.ifActive);
    }
  }
}
customElements.define('feature-flipping', FeatureFlipping);


class ConditionElement extends HTMLElement {
  static get observedAttributes() {
    return ['active'];
  }
  show() {
    this.style["display"] = "inline-block";
  }
  hide() {
    this.style["display"] = "none";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === "active") {
      IF(newValue, this.show.bind(this), this.hide.bind(this));
    }
  }
}
class IfTrue extends ConditionElement {}

customElements.define('if-true', IfTrue);

class IfFalse extends ConditionElement {}
customElements.define('if-false', IfFalse);