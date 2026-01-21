'use strict';
// IIFE
// Global Scope
(function(){
    // Just for example
    const validationRegExps = {
        'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        'phone': /^\+[1-9]\d{7,14}$/,
        'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,''\-\/#]+$/u
    }

    const errorMessages = {
        'fullName': 'Full Name Required',
        'phone': 'Phone Number Required',
        'address': 'Address Required',
    }

    // DOM Elements - carried out
    const contactsAlert = document.querySelector('[data-contacts-alert]');
    const contactsList = document.querySelector('[data-contacts-list]');
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const contactNameElement = document.querySelector('#contactNameToDelete');
    const confirmDeleteBtn = document.querySelector('#confirmDelete');

    // UI Handling
    const uiContactsListHandler = () => {
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

    const listHandler = uiContactsListHandler()


    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const toastDeleted = new bootstrap.Toast(document.querySelector('#contactDeleted'))

    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });

    const deleteContactModal = new bootstrap.Modal('#deleteContactModal', {
        keyboard: true,
        backdrop: true
    });



    // State management
    const contactsManagement = () => {
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
    const contactService = contactsManagement();



    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
    })

    contactsList.addEventListener('click', e => {
        if (!e.target.classList.contains('remove-button')) return;

        const li = e.target.closest('li');
        const id = Number(li.dataset.id);
        const contact = contactService.getContacts().find(c => c.id === id);

        if (!contact) return;

        listHandler.setContactToDelete(id);

        contactNameElement.textContent = contact.fullName;

        deleteContactModal.show();
    });

    confirmDeleteBtn.addEventListener('click', () => {
        const idToDelete = listHandler.getContactToDelete();

        if (idToDelete !== null) {
            contactService.removeContact(idToDelete);
            listHandler.removeElement(idToDelete);
            listHandler.clearContactToDelete();

            toastDeleted.show();
        }

        deleteContactModal.hide();
    });

    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, value, parentElement: wrapper} = input;

                if(validationRegExps[name].test(value)) {
                    acc[name] = value
                } else {
                    const errBlock = document.createElement('div');
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add('text-danger', 'error-validation');
                    wrapper.append(errBlock)
                    formValidated = false;
                }
                return acc;
            }, {})

            if(!formValidated) return null

            data.id = Date.now();

            contactService.addContact(data);
            listHandler.addElement(data)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();
            document.querySelectorAll('.error-validation').forEach(item => item.remove())
        })
})()
// Global Scope