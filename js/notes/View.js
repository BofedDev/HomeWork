'use strict';

class View {

    titleInput = document.querySelector('[data-title-form]');
    selectInput = document.querySelector('[data-select-form]');
    form = document.querySelector('#notes-form');
    notesList = document.querySelector('[data-child-container]');
    errorContainer = document.querySelector('[data-error]');
    statsContainer = document.querySelector('[data-stats]');
    editModal = new bootstrap.Modal('#editTask', { backdrop: 'static', keyboard: false });
    editTitleInput = document.querySelector('#editTitleInput');
    editTitleError = document.querySelector('#editTitleError');
    editTitleSaveBtn = document.querySelector('#editTitleSave');
    sortBtn = document.querySelector('[data-sort-btn]');
    filterBtns = document.querySelectorAll('[data-filter]');
    categoryFilterSelect = document.querySelector('[data-filter-category]');

    addNoDataToDisplay() {
        this.notesList.innerHTML = `<p class="text-center text-muted mt-3 w-100 message" data-no-notes>No notes yet</p>`;
    }

    removeNoDataToDisplay() {
        const noNotes = this.notesList.querySelector('[data-no-notes]');
        if (noNotes) noNotes.remove();
    }

    clearContainer() {
        this.notesList.innerHTML = '';
    }

    showError(message) {
        this.errorContainer.textContent = message;
    }

    clearError() {
        this.errorContainer.textContent = '';
    }

    updateStats({ total, important }) {
        this.statsContainer.textContent = `Total: ${total} | Important: ${important}`;
    }

    updateSortBtn(sortNewest) {
        this.sortBtn.textContent = sortNewest ? '↓ Newest first' : '↑ Oldest first';
    }

    setActiveFilter(filterType) {
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === filterType);
        });
    }

    createItem({ title, category, id, important }) {
        const card = document.createElement('div');
        card.classList.add('note-card');
        if (important) card.classList.add('note-card--important');
        card.setAttribute('data-id', id);

        card.innerHTML = `
            <div class="note-title">${title}</div>
            <div class="note-category badge bg-secondary mb-2">${category}</div>
            <div class="note-actions mt-2">
                <button class="btn btn-sm btn-warning" data-important-btn>
                    ${important ? 'Unmark important' : 'Mark important'}
                </button>
                <button class="btn btn-sm btn-primary" data-edit-btn>Edit title</button>
                <button class="btn btn-sm btn-danger" data-remove-btn>Delete</button>
            </div>
        `;

        this.notesList.appendChild(card);
        return card;
    }

    removeItemById(id) {
        const el = this.notesList.querySelector(`[data-id="${id}"]`);
        if (el) el.remove();
    }

    toggleImportantUI(id, isImportant) {
        const card = this.notesList.querySelector(`[data-id="${id}"]`);
        if (!card) return;
        card.classList.toggle('note-card--important', isImportant);
        const btn = card.querySelector('[data-important-btn]');
        if (btn) btn.textContent = isImportant ? 'Unmark important' : 'Mark important';
    }

    updateTitleUI(id, newTitle) {
        const card = this.notesList.querySelector(`[data-id="${id}"]`);
        if (!card) return;
        const titleEl = card.querySelector('.note-title');
        if (titleEl) titleEl.textContent = newTitle;
    }

    openEditModal(currentTitle) {
        this.editTitleInput.value = currentTitle;
        this.editTitleError.textContent = '';
        this.editModal.show();
    }

    closeEditModal() {
        this.editModal.hide();
    }

    showEditError(message) {
        this.editTitleError.textContent = message;
    }

    renderAll(notes) {
        this.clearContainer();
        if (!notes.length) {
            this.addNoDataToDisplay();
            return;
        }
        notes.forEach(note => this.createItem(note));
    }
}

export default View;