import {LightningElement, api, track, wire} from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';

import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import ACCOUNT_NAME from '@salesforce/schema/Contact.Account.Name';
import TITLE from '@salesforce/schema/Contact.Title';
import DEPARTMENT from '@salesforce/schema/Contact.Department';
import PHONE from '@salesforce/schema/Contact.Phone';
import BIRTHDATE from '@salesforce/schema/Contact.Birthdate';
import EMAIL from '@salesforce/schema/Contact.EMAIL';
import MOBILE_PHONE from '@salesforce/schema/Contact.MobilePhone';

export default class ContactCard extends LightningElement {
    @api recordId = '0035g000007M3egAAC';
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [FIRST_NAME, LAST_NAME, ACCOUNT_NAME, DEPARTMENT, PHONE, BIRTHDATE],
        optionalFields: [EMAIL, TITLE, MOBILE_PHONE]
    })
    contact;

    get firstName() {
        return getFieldValue(this.contact.data, FIRST_NAME);
    }

    get lastName() {
        return getFieldValue(this.contact.data, LAST_NAME);
    }

    get department() {
        return getFieldValue(this.contact.data, DEPARTMENT);
    }

    get accountName() {
        return getFieldValue(this.contact.data, ACCOUNT_NAME);
    }

    get title() {
        return getFieldValue(this.contact.data, TITLE);
    }

    get birthdate() {
        return getFieldValue(this.contact.data, BIRTHDATE);
    }

    get email() {
        return getFieldValue(this.contact.data, EMAIL);
    }

    get phone() {
        return getFieldValue(this.contact.data, PHONE);
    }

    get mobilePhone() {
        return getFieldValue(this.contact.data, MOBILE_PHONE);
    }
}