'use strict';
export const modals = () => {
    const addContactModal = new bootstrap.Modal('#addContactModal', {
        keyboard: false,
        backdrop: 'static'
    });

    const deleteContactModal = new bootstrap.Modal('#deleteContactModal', {
        keyboard: true,
        backdrop: true
    });

    return {addContactModal, deleteContactModal};
}
