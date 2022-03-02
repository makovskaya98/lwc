import {LightningElement, api, track, wire} from 'lwc';

export default class Component extends LightningElement {
    @api text;

    getText() {
        this.text = this.template.querySelector('lightning-input').value;
    }
}