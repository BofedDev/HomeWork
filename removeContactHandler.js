'use strict';
export const createDeleteContactHandlers = (contactService, listHandler, deleteContactModal, toastDeleted, contactNameElement) => {

    const handleRemoveClick = (e) => {
        if (!e.target.classList.contains('remove-button')) return;

        const li = e.target.closest('li');
        const id = Number(li.dataset.id);
        const contact = contactService.getContacts().find(c => c.id === id);

        if (!contact) return;

        listHandler.setContactToDelete(id);
        contactNameElement.textContent = contact.fullName;
        deleteContactModal.show();
    };

    const handleConfirmDelete = () => {
        const idToDelete = listHandler.getContactToDelete();

        if (idToDelete !== null) {
            contactService.removeContact(idToDelete);
            listHandler.removeElement(idToDelete);
            listHandler.clearContactToDelete();
            toastDeleted.show();
        }

        deleteContactModal.hide();
    };

    return {
        handleRemoveClick,
        handleConfirmDelete
    }
}