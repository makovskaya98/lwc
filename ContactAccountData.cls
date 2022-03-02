/**
 * @Author : Makovskaya Kristina
 * @Date : 04/11/2021
 * @description : This class contains methods that perform sql queries on contacts and accounts.
 */
public with sharing class ContactAccountData {
    /**
     * This method returns a list of contacts.
     * @return List<Contact>
     */
    @AuraEnabled(Cacheable = true)
    public static List<Contact> getContacts() {
        return [
            SELECT Name, Account.Name, Phone, Email
            FROM Contact
            LIMIT 50000
        ];
    }
    /**
     * This method returns a list of accounts.
     * @return List<Account>
     */
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, Type, Phone, Fax, AccountNumber, Website, Description
            FROM Account
            LIMIT 50000
        ];
    }
}