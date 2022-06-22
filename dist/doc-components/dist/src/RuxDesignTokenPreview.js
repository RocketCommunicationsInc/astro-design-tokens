import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export var tokenType;
(function (tokenType) {
    tokenType["backgroundColor"] = "background";
    tokenType["borderColor"] = "border";
    tokenType["textColor"] = "text";
    tokenType["textSize"] = "text-size";
    tokenType["borderWidth"] = "border-width";
    tokenType["shadow"] = "shadow";
    tokenType["radius"] = "radius";
    tokenType["fontSize"] = "font-size";
    tokenType["fontWeight"] = "font-weight";
    tokenType["spacing"] = "spacing";
    tokenType["opacity"] = "opacity";
    tokenType["lineHeight"] = "line-height";
})(tokenType || (tokenType = {}));
export class RuxDesignTokenPreview extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'backgroundColor';
        this.name = '';
        this.value = '';
        this.alias = '';
        this.description = '';
        this.hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16),
                }
                : null;
        };
        this.isDark = (hexColor) => {
            // @ts-ignore
            const { r, g, b } = this.hexToRgb(hexColor);
            const colorArray = [r / 255, g / 255, b / 255].map(v => {
                if (v <= 0.03928) {
                    return v / 12.92;
                }
                return ((v + 0.055) / 1.055) ** 2.4;
            });
            const luminance = 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2];
            return luminance <= 0.179;
        };
    }
    getBackgroundPreview() {
        return html `<div
      class="token__preview"
      style="background-color: ${this.value}"
    ></div>`;
    }
    getTextColorPreview() {
        return html `<div
      class="token__preview"
      style="
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${this.value};
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #1b2d3e;
        ${this.isDark(this.value) ? 'background: transparent;' : ''})}
      "
    >
      Aa
    </div>`;
    }
    getBorderPreview() {
        return html `<div
      class="token__preview"
      style="border: 2px solid ${this.value}"
    ></div>`;
    }
    getTextSizePreview() {
        return html `
      <div
        class="token__preview"
        style="text-align: center; display: flex; align-items:center; justify-content: center;"
      >
        <div style="color: black; font-size: ${this.value}px;">Aa</div>
      </div>
    `;
    }
    getFontWeightPreview() {
        return html `
      <div
        class="token__preview"
        style="display: flex; align-items: center; justify-content: center; font-weight: ${this
            .value}"
      >
        Aa
      </div>
    `;
    }
    getRadiusPreview() {
        return html `<div
      class="token__preview"
      style="border: 2px solid var(--color-grey); border-radius: ${this.value}"
    ></div>`;
    }
    getShadowPreview() {
        return html `<div
      class="token__preview"
      style="border: 2px solid var(--color-grey); box-shadow: ${this.value}"
    ></div>`;
    }
    getOpacityPreview() {
        return html `<div class="token__preview opacity-token">
      <div
        style="width: 100%; height: 100%; background: var(--color-grey); opacity: ${this
            .value};"
      ></div>
    </div>`;
    }
    getBorderWidthPreview() {
        return html `
      <div
        class="token__preview"
        style="border: ${this.value} solid var(--color-grey);"
      ></div>
    `;
    }
    getSpacingPreview() {
        return html `
      <div
        style="width: ${this
            .value}; height: 20px; margin-right: 1rem; background: var(--color-grey);"
      ></div>
    `;
    }
    getLineHeightPreview() {
        return html `
      <div
        style="width: 230px; text-align: center; display: flex; align-items: center; justify-content: center;"
      >
        <p style="color: black; text-align: left; line-height: ${this.value}">
          In my younger and more vulnerable years my father gave me some advice
          that I've been turning over in my mind ever since. "Whenever you feel
          like criticizing any one," he told me, "just remember that all the
          people in this world haven't had the advantages that you've had."
        </p>
      </div>
    `;
    }
    getPreview() {
        if (this.type === tokenType.backgroundColor) {
            return this.getBackgroundPreview();
        }
        if (this.type === tokenType.textColor) {
            return this.getTextColorPreview();
        }
        if (this.type === tokenType.borderColor) {
            return this.getBorderPreview();
        }
        if (this.type === tokenType.textSize) {
            return this.getTextSizePreview();
        }
        if (this.type === tokenType.fontWeight) {
            return this.getFontWeightPreview();
        }
        if (this.type === tokenType.radius) {
            return this.getRadiusPreview();
        }
        if (this.type === tokenType.shadow) {
            return this.getShadowPreview();
        }
        if (this.type === tokenType.opacity) {
            return this.getOpacityPreview();
        }
        if (this.type === tokenType.spacing) {
            return this.getSpacingPreview();
        }
        if (this.type === tokenType.lineHeight) {
            return this.getLineHeightPreview();
        }
        if (this.type === tokenType.borderWidth) {
            return this.getBorderWidthPreview();
        }
        return html `<div></div>`;
    }
    render() {
        return html `
      <div class="token">
        <div class="token__preview-container">${this.getPreview()}</div>
        <div class="token__content-container">
          <div class="token__content">
            <div class="token__name">${this.name}</div>
            <div class="token__value">${this.value}</div>
          </div>
          <div class="token__second-row" style="display: flex;">
            <div style="width: 60%;">
              <p class="token__description">${this.description}</p>
            </div>
            <div style="margin-left: auto;" class="token__alias">
              ${this.alias}
            </div>
          </div>
        </div>
      </div>
    `;
    }
}
RuxDesignTokenPreview.styles = css `
    :host {
      display: block;
      padding: 25px;
      --color-grey: rgb(107, 114, 128);
      --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      color: var(--rux-design-token-preview-text-color, #000);
    }
    .token {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-family: var(--font-family-base);
    }
    .token__preview-container {
      display: flex;
      align-items: center;
      margin-right: 2rem;
    }
    .token__content-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
    .token__preview {
      width: 4rem;
      height: 4rem;
    }
    .token__content {
      display: flex;
      align-items: center;
    }
    .token__name {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .token__value {
      margin-left: auto;
      display: flex;
      font-size: 0.875rem;
      line-height: 1.25rem;
      align-items: center;
    }
    .token__description,
    .token__alias {
      color: var(--color-grey);
    }

    p {
      margin: 0;
      padding: 0;
    }

    .opacity-token {
      background: linear-gradient(
          45deg,
          rgba(43, 40, 38, 0.1) 25%,
          transparent 0
        ),
        linear-gradient(-45deg, rgba(43, 40, 38, 0.1) 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, rgba(43, 40, 38, 0.1) 0),
        linear-gradient(-45deg, transparent 75%, rgba(43, 40, 38, 0.1) 0);
      background-position: 0 0, 0 6px, 6px -6px, -6px 0;
      background-size: 12px 12px;
    }
  `;
__decorate([
    property({ type: String })
], RuxDesignTokenPreview.prototype, "type", void 0);
__decorate([
    property({ type: String })
], RuxDesignTokenPreview.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RuxDesignTokenPreview.prototype, "value", void 0);
__decorate([
    property({ type: String })
], RuxDesignTokenPreview.prototype, "alias", void 0);
__decorate([
    property({ type: String })
], RuxDesignTokenPreview.prototype, "description", void 0);
//# sourceMappingURL=RuxDesignTokenPreview.js.map