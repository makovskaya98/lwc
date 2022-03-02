import {LightningElement, api} from 'lwc';

export default class SortDataByName extends LightningElement {
    @api sortDataByName(sObjectList) {
        return [...sObjectList.sort((a, b) => a.Name > b.Name ? 1 : -1)];
    }
}