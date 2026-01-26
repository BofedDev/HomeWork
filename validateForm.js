'use strict';
import {validationRegExps, errorMessages} from '../validate.js';

export const validateFormInputs = (inputs) => {
    let formValidated = true;
    const data = {};

    inputs.forEach(input => {
        const {name, value, parentElement: wrapper} = input;

        if(validationRegExps[name].test(value)) {
            data[name] = value;
        } else {
            const errBlock = document.createElement('div');
            errBlock.innerHTML = errorMessages[name];
            errBlock.classList.add('text-danger', 'error-validation');
            wrapper.append(errBlock);
            formValidated = false;
        }
    });

    return {formValidated, data};
}

export const clearValidationErrors = () => {
    document.querySelectorAll('.error-validation').forEach(item => item.remove());
}