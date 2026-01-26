import {contactsManagement} from './createContact.js';
import {uiContactsListHandler} from './createContactUI.js';
import {modals} from './modals.js';
import {toasts} from './tosts.js';
import {createAddContactHandler} from './addContactHandler.js';
import {createDeleteContactHandlers} from './removeContactHandler.js';

(function(){
    // DOM Elements
    const contactsAlert = document.querySelector('[data-contacts-alert]');
    const contactsList = document.querySelector('[data-contacts-list]');
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const contactNameElement = document.querySelector('#contactNameToDelete');
    const confirmDeleteBtn = document.querySelector('#confirmDelete');

    // Init
    const contactService = contactsManagement();
    const listHandler = uiContactsListHandler(contactsList, contactsAlert);
    const {addContactModal, deleteContactModal} = modals();
    const {toastAdded, toastDeleted} = toasts();

    // Handlers
    const addContactHandler = createAddContactHandler(
        contactService,
        listHandler,
        addContactModal,
        toastAdded
    );

    const { handleRemoveClick, handleConfirmDelete } = createDeleteContactHandlers(
        contactService,
        listHandler,
        deleteContactModal,
        toastDeleted,
        contactNameElement
    );

    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show();
    });

    contactsList.addEventListener('click', handleRemoveClick);

    confirmDeleteBtn.addEventListener('click', handleConfirmDelete);

    document.querySelector('form#add-contact-form')
        .addEventListener('submit', addContactHandler);
})();