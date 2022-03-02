import {LightningElement, api, track, wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactData.getContacts';

const columns = [
    {label: 'First Name', fieldName: 'FirstName'},
    {label: 'Last Name', fieldName: 'LastName'},
    {label: 'Account.Name', fieldName: 'Account.Name'},
    {label: 'Phone', fieldName: 'Phone', type: 'phone'},
    {label: 'Email', fieldName: 'Email', type: 'email'},
];
export default class ContactComponent extends LightningElement {
    @track error;
    columns = columns;
    @track data;
    @api searchName = '';
    @track allRecords;

    @wire(getContacts, {searchName: '$searchName'})
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

    getSearchName(event) {
        this.searchName = event.target.value;
    }
}