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

import { html } from 'lit-element';
import { DropdownItem } from './dropdownitem.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-label';
import '@spectrum/sp-tooltip';

export function separatorTemplate(this: DropdownItem) {
    return html`
    <li class="spectrum-Menu-divider" ></li>
    `;
}

export function elementTemplate(this: DropdownItem) {
    const selectThumbnails: any[] = [];
    if (this.thumbnails) {
        selectThumbnails.push(html`
            <sp-icon name="ThumbnailSmall" style="width: 20px; height: 20px; display: inline-block; margin-right: 8px;"></sp-icon>
        `);
    }

    return html`
        ${(this.selected) ? 
            html`
                <span class="spectrum-Menu-itemLabel">${this.text}</span>
                <sp-icon name="CheckmarkMedium" class="spectrum-Menu-checkmark spectrum-Menu-itemIcon"></sp-icon>` : 
            html`${this.text}`
        }
    `;
}

