/**
 * @Author : Makovskaya Kristina
 * @Date : 04/11/2021
 * @description : This class contains methods that perform sql queries on contacts.
 */
public with sharing class ContactData {
    /**
     * This method returns a list of contacts sorted in ascending order and searches by the name field.
     * @param searchName
     * @return List<Contact>
     */
    @AuraEnabled(Cacheable = true)
    public static List<Contact> getContacts(String searchName) {
        String searchNameLike = '%' + searchName + '%';
        return [
            SELECT FirstName, LastName, Account.Name, Phone, Email
            FROM Contact
            WHERE Name LIKE :searchNameLike
            ORDER BY Name ASC
            LIMIT 50000
        ];
    }
    /**
     * This method returns a list of contacts sorted in ascending order by the name field.
     * @return List<Contact>
     */
    @AuraEnabled(Cacheable = true)
    public static List<Contact> getContacts() {
        return [
            SELECT FirstName, LastName, Account.Name, Phone, Email
            FROM Contact
            ORDER BY Name ASC
            LIMIT 50000
        ];
    }
}