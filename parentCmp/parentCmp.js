import {LightningElement, api, track, wire} from 'lwc';

export default class ParentCmp extends LightningElement {
    @api arr = Array.from({length: 10}, (_, i) => i + 1);
    @api title;

    iterationNumber(event) {
        this.title = event.detail;
    }
}