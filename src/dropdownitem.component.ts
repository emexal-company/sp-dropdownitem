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

import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import dropdownitemStyles from './dropdownitem.styles';
import { elementTemplate, separatorTemplate } from './dropdownitem.template';

@customElement('sp-dropdownitem')
export class DropdownItem extends Base {
    public static componentStyles = [dropdownitemStyles];

    @property({ type: String }) public role: string = '';
    @property({ type: String }) public text: string = '';
    @property({ type: String }) public id: string = '';
    @property({ type: Boolean }) public separator: boolean = false;
    @property({ type: Boolean }) public selected: boolean = false;
    @property({ type: Boolean }) public disabled: boolean = false;
    @property({ type: Boolean }) public thumbnails: boolean = false;

    protected render() {
        if (this.separator) {
            return separatorTemplate.call(this);
        } else {
            return elementTemplate.call(this);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-dropdownitem': DropdownItem;
    }
}
