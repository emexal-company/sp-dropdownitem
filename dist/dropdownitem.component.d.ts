import { Base } from '@spectrum/sp-base';
export declare class DropdownItem extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    role: string;
    text: string;
    id: string;
    separator: boolean;
    selected: boolean;
    disabled: boolean;
    thumbnails: boolean;
    protected firstUpdated(): void;
    protected handleClick(e: any): void;
    protected handleDisabledClick(e: any): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-dropdownitem': DropdownItem;
    }
}
