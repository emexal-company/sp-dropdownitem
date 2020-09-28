import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropdownitemStyles from './dropdownitem.styles';
import { elementTemplate, separatorTemplate } from './dropdownitem.template';
//import { Dropdown } from '@spectrum/sp-dropdown';
let DropdownItem = class DropdownItem extends Base {
    constructor() {
        super(...arguments);
        this.role = '';
        this.text = '';
        this.id = '';
        this.separator = false;
        this.selected = false;
        this.disabled = false;
        this.thumbnails = false;
    }
    firstUpdated() {
    }
    handleClick(e) {
        this.selected = !this.selected;
        let changedEvent = new CustomEvent('dropchanged', {
            detail: {
                text: this.text,
                selected: this.selected
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(changedEvent);
    }
    handleDisabledClick(e) { }
    render() {
        if (this.separator) {
            return separatorTemplate.call(this);
        }
        else {
            return elementTemplate.call(this);
        }
    }
};
DropdownItem.componentStyles = [dropdownitemStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], DropdownItem.prototype, "role", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], DropdownItem.prototype, "text", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], DropdownItem.prototype, "id", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], DropdownItem.prototype, "separator", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], DropdownItem.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], DropdownItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], DropdownItem.prototype, "thumbnails", void 0);
DropdownItem = __decorate([
    customElement('sp-dropdownitem')
], DropdownItem);
export { DropdownItem };
//# sourceMappingURL=dropdownitem.component.js.map