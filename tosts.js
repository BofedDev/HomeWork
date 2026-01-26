'use strict';

export const toasts = () => {
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'));
    const toastDeleted = new bootstrap.Toast(document.querySelector('#contactDeleted'));

    return {
        toastAdded,
        toastDeleted
    }
}