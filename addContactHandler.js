'use strict';
import {validateFormInputs, clearValidationErrors} from './validateForm.js';

export const createAddContactHandler = (contactService, listHandler, addContactModal, toastAdded) => {
    return (evt) => {
        evt.preventDefault();

        const inputs = evt.target.querySelectorAll('input, textarea');
        const {formValidated, data} = validateFormInputs(Array.from(inputs));

        if (!formValidated) return null;

        data.id = Date.now();

        contactService.addContact(data);
        listHandler.addElement(data);

        addContactModal.hide();
        toastAdded.show();
        evt.target.reset();
        clearValidationErrors();
    }

}