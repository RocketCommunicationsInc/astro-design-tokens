import { LitElement } from 'lit';
export declare enum tokenType {
    backgroundColor = "background",
    borderColor = "border",
    textColor = "text",
    textSize = "text-size",
    borderWidth = "border-width",
    shadow = "shadow",
    radius = "radius",
    fontSize = "font-size",
    fontWeight = "font-weight",
    spacing = "spacing",
    opacity = "opacity",
    lineHeight = "line-height"
}
export declare class RuxDesignTokenPreview extends LitElement {
    static styles: import("lit").CSSResult;
    type: string;
    name: string;
    value: string;
    alias: string;
    description: string;
    hexToRgb: (hex: string) => {
        r: number;
        g: number;
        b: number;
    } | null;
    isDark: (hexColor: string) => boolean;
    getBackgroundPreview(): import("lit-html").TemplateResult<1>;
    getTextColorPreview(): import("lit-html").TemplateResult<1>;
    getBorderPreview(): import("lit-html").TemplateResult<1>;
    getTextSizePreview(): import("lit-html").TemplateResult<1>;
    getFontWeightPreview(): import("lit-html").TemplateResult<1>;
    getRadiusPreview(): import("lit-html").TemplateResult<1>;
    getShadowPreview(): import("lit-html").TemplateResult<1>;
    getOpacityPreview(): import("lit-html").TemplateResult<1>;
    getBorderWidthPreview(): import("lit-html").TemplateResult<1>;
    getSpacingPreview(): import("lit-html").TemplateResult<1>;
    getLineHeightPreview(): import("lit-html").TemplateResult<1>;
    getPreview(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
