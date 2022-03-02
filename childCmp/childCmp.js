import {LightningElement, api, track, wire} from 'lwc';

export default class ChildCmp extends LightningElement {
    @api iterationNum;
    @api numberPressedIteration;

    @api numberIteration(event) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('iteration', {detail: this.iterationNum}));
    }
}