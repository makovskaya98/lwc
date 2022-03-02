import {LightningElement, api, track, wire} from 'lwc';
import getAccounts from '@salesforce/apex/ContactAccountData.getAccounts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Type', fieldName: 'Type'},
    {label: 'Phone', fieldName: 'Phone'},
    {label: 'Fax', fieldName: 'Fax', type: 'phone'},
    {label: 'AccountNumber', fieldName: 'AccountNumber'},
    {label: 'Website', fieldName: 'Website'},
    {label: 'Description', fieldName: 'Description'},
];

export default class AccountTable extends LightningElement {
    @track error;
    columns = columns;
    @track data;
    @track allRecords;

    @wire(getAccounts)
    accountsRecord({error, data}) {
        if (data) {
            this.allRecords = data.map(
                record => Object.assign(record)
            );
        } else if (error) {
            this.error = error;
        }
    };

    sortData(event) {
        this.allRecords = this.template.querySelector('c-sort-data-by-name').sortDataByName(this.allRecords);
    }
}