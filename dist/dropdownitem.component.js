/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropdownitemStyles from './dropdownitem.styles';
import { elementTemplate, separatorTemplate } from './dropdownitem.template';
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
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean)
], DropdownItem.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
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