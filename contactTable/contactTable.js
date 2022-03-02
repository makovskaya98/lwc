import {api, LightningElement, track, wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactAccountData.getContacts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Account.Name', fieldName: 'Account.Name'},
    {label: 'Phone', fieldName: 'Phone', type: 'phone'},
    {label: 'Email', fieldName: 'Email', type: 'email'},
];
export default class ContactTable extends LightningElement {
    @track error;
    columns = columns;
    @track data;
    @api searchName = '';
    @track allRecords;

    @wire(getContacts)
    contactsRecord({error, data}) {
        if (data) {
            this.allRecords = data.map(
                record => Object.assign(
                    {"Account.Name": record.Account.Name},
                    record));
        } else if (error) {
            this.error = error;
        }
    };

    sortData(event) {
        this.allRecords = this.template.querySelector('c-sort-data-by-name').sortDataByName(this.allRecords);
    }
}