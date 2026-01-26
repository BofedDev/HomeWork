'use strict';

export const uiContactsListHandler = (contactsList, contactsAlert) => {
    let contactIdToDelete = null;


    const createItemTemplate = (data) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        li.dataset.id = data.id;

        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.innerHTML = `<span>${data.fullName} | ${data.phone} | ${data.address}</span> <button class="remove-button btn btn-sm">Remove</button>`;

        return li;
    }
    // -----------------------------------------
    const addElement = (data) => {
        const element = createItemTemplate(data)
        contactsList.prepend(element)
        contactsList.classList.remove('d-none');
        contactsAlert.classList.add('d-none');
    }

    const removeElement = (id) => {
        document.querySelector(`li[data-id="${id}"]`)?.remove();

        if (!contactsList.children.length) {
            contactsList.classList.add('d-none');
            contactsAlert.classList.remove('d-none');
        }
    };

    const setContactToDelete = (id) => {
        contactIdToDelete = id;
    }

    const getContactToDelete = () => {
        return contactIdToDelete;
    }

    const clearContactToDelete = () => {
        contactIdToDelete = null;
    }

    return {
        addElement,
        removeElement,
        setContactToDelete,
        getContactToDelete,
        clearContactToDelete
    }
}