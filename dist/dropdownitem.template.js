import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-label';
import '@spectrum/sp-tooltip';
import '@spectrum/sp-icon';
export function separatorTemplate() {
    return html `
    <li class="spectrum-Menu-divider" ></li>
    `;
}
export function elementTemplate() {
    const classes = {
        'is-selected': this.selected,
        'is-disabled': this.disabled
    };
    const selectThumbnails = [];
    if (this.thumbnails) {
        selectThumbnails.push(html `
            <sp-icon name="ThumbnailSmall" style="width: 20px; height: 20px; display: inline-block; margin-right: 8px;"></sp-icon>
        `);
    }
    return html `
    <li class="spectrum-Menu-item ${classMap(classes)}"
        id="${this.id}"
        role="${this.role}"
        ?aria-selected="${this.selected}"
        tabindex="0"
        @click='${(this.disabled) ? this.handleDisabledClick : this.handleClick}'>
        <slot></slot>
        ${selectThumbnails}
        <span class="spectrum-Menu-itemLabel" >${this.text}</span>
        ${(this.selected) ? html `<sp-icon name="CheckmarkMedium" class="spectrum-Menu-checkmark spectrum-Menu-itemIcon"></sp-icon>` : ''}
    </li>
    `;
}
//# sourceMappingURL=dropdownitem.template.js.map