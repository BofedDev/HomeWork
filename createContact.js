'use strict';

export const contactsManagement = () => {
    const contacts = [];

    const getContacts = () => {
        return structuredClone(contacts);
    }

    const addContact = (data) => {
        contacts.push(data);
    }

    const removeContact = (id) => {
        const index = contacts.findIndex(c => c.id === id);
        if (index !== -1) contacts.splice(index, 1);
    };

    return {
        getContacts,
        addContact,
        removeContact
    }
}