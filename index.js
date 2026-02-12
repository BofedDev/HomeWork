'use strict';

const inputFirstName = document.querySelector('input[data-user-first-name]');
const inputLastName = document.querySelector('input[data-user-last-name]');
const inputEmail = document.querySelector('input[data-user-email]');
const save = document.querySelector('.save');
const freeze = document.querySelector('.freeze');
const showDescriptorsBtn = document.querySelector('.show-descriptors');
const container = document.querySelector('.container');

const profileModel = {};

// Properties -------------------------

// Private
Object.defineProperties(profileModel, {
    _firstName: {
        value: '',
        writable: true,
        enumerable: false,
        configurable: false
    },
    _lastName: {
        value: '',
        writable: true,
    },
    _email: {
        value: '',
        writable: true,
    }
});

// Getters and Setters
Object.defineProperties(profileModel, {
    firstName: {
        get() { return this._firstName },
        set(value) {
            const trimmed = String(value).trim();
            if (trimmed.length < 2) return;
            this._firstName = trimmed;
        }
    },
    lastName: {
        get() { return this._lastName },
        set(value) {
            const trimmed = String(value).trim();
            if (trimmed.length < 2) return;
            this._lastName = trimmed;
        }
    },
    email: {
        get() { return this._email },
        set(value) {
            const trimmed = String(value).trim();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return;
            this._email = trimmed;
        }
    }
});

// Public
Object.defineProperties(profileModel, {
    fullName: {
        get() {
            return `${this._firstName} ${this._lastName}`.trim();
        },
        enumerable: true
    }
});

// UI -----------------------

function showErrors(errors) {
    hideErrors();
    if (errors.length === 0) return;

    const errorBox = document.createElement('div');
    errorBox.className = 'error-box';

    const strong = document.createElement('strong');
    strong.textContent = 'Помилки валідації:';
    errorBox.appendChild(strong);

    const ul = document.createElement('ul');
    errors.forEach(err => {
        const li = document.createElement('li');
        li.textContent = `• ${err}`;
        ul.appendChild(li);
    });
    errorBox.appendChild(ul);

    const h1 = container.querySelector('h1');
    h1.after(errorBox);
}

function hideErrors() {
    const errorBox = container.querySelector('.error-box');
    if (errorBox) errorBox.remove();
}

function showPreview() {
    hidePreview();

    const preview = document.createElement('div');
    preview.className = 'preview';

    const h3 = document.createElement('h3');
    h3.textContent = 'Profile Preview';

    const fullNameP = document.createElement('p');
    const fullNameStrong = document.createElement('strong');
    fullNameStrong.textContent = 'FULL NAME';
    fullNameP.appendChild(fullNameStrong);
    fullNameP.append(` ${profileModel.fullName}`);

    const emailP = document.createElement('p');
    const emailStrong = document.createElement('strong');
    emailStrong.textContent = 'EMAIL';
    emailP.appendChild(emailStrong);
    emailP.append(` ${profileModel.email}`);

    const dateP = document.createElement('p');
    const dateStrong = document.createElement('strong');
    dateStrong.textContent = 'UPDATED';
    dateP.appendChild(dateStrong);
    dateP.append(` ${new Date().toLocaleString('uk-UA')}`);

    preview.appendChild(h3);
    preview.appendChild(fullNameP);
    preview.appendChild(emailP);
    preview.appendChild(dateP);

    container.appendChild(preview);
}

function hidePreview() {
    const preview = container.querySelector('.preview');
    if (preview) preview.remove();
}

// Event Listeners --------------------

// Input validation
inputFirstName.addEventListener('input', () => {
    const value = inputFirstName.value.trim();
    if (value.length > 0 && value.length < 2) {
        inputFirstName.classList.add('invalid');
    } else {
        inputFirstName.classList.remove('invalid');
    }
});

inputLastName.addEventListener('input', () => {
    const value = inputLastName.value.trim();
    if (value.length > 0 && value.length < 2) {
        inputLastName.classList.add('invalid');
    } else {
        inputLastName.classList.remove('invalid');
    }
});

inputEmail.addEventListener('input', () => {
    const value = inputEmail.value.trim();
    if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        inputEmail.classList.add('invalid');
    } else {
        inputEmail.classList.remove('invalid');
    }
});

// Save button event
save.addEventListener('click', () => {
    if (Object.isFrozen(profileModel)) {
        alert('Модель заблокована');
        return;
    }

    const errors = [];
    const first = inputFirstName.value.trim();
    const last = inputLastName.value.trim();
    const mail = inputEmail.value.trim();

    inputFirstName.classList.remove('invalid');
    inputLastName.classList.remove('invalid');
    inputEmail.classList.remove('invalid');

    if (first.length < 2) {
        errors.push('First name мінімум 2 символи');
        inputFirstName.classList.add('invalid');
    }
    if (last.length < 2) {
        errors.push('Last name мінімум 2 символи');
        inputLastName.classList.add('invalid');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        errors.push('Неправильний формат email');
        inputEmail.classList.add('invalid');
    }

    if (errors.length > 0) {
        showErrors(errors);
        hidePreview();
        return;
    }

    hideErrors();

    profileModel.firstName = first;
    profileModel.lastName = last;
    profileModel.email = mail;

    alert('Збережено: ' + profileModel.fullName);
    showPreview();
});

// Freeze button event
freeze.addEventListener('click', () => {
    Object.freeze(profileModel);
    alert('Профіль заморожено');
});

// ShowDescripto button event
showDescriptorsBtn.addEventListener('click', () => {
    const oldDescriptors = container.querySelector('.descriptors-block');
    if (oldDescriptors) {
        oldDescriptors.remove();
        return;
    }

    const descriptorsBlock = document.createElement('div');
    descriptorsBlock.className = 'descriptors-block';

    const h3 = document.createElement('h3');
    h3.textContent = 'Object Descriptors';
    descriptorsBlock.appendChild(h3);

    const pre = document.createElement('pre');
    const descriptors = {
        _firstName: Object.getOwnPropertyDescriptor(profileModel, '_firstName'),
        _lastName: Object.getOwnPropertyDescriptor(profileModel, '_lastName'),
        _email: Object.getOwnPropertyDescriptor(profileModel, '_email'),
        firstName: Object.getOwnPropertyDescriptor(profileModel, 'firstName'),
        lastName: Object.getOwnPropertyDescriptor(profileModel, 'lastName'),
        email: Object.getOwnPropertyDescriptor(profileModel, 'email'),
        fullName: Object.getOwnPropertyDescriptor(profileModel, 'fullName')
    };

    pre.textContent = JSON.stringify(descriptors, null, 2);
    descriptorsBlock.appendChild(pre);

    container.appendChild(descriptorsBlock);
});