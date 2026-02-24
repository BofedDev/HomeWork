'use strict';

class Controller {
    #editingId = null;
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.#onLoadHandler();

            this.#view.form.addEventListener('submit', this.#submitHandler);
            this.#view.notesList.addEventListener('click', this.#listClickHandler);

            document.querySelector('#deleteAll-button')
                .addEventListener('click', this.#clearAllHandler);

            this.#view.sortBtn.addEventListener('click', this.#sortHandler);

            this.#view.filterBtns.forEach(btn => {
                btn.addEventListener('click', this.#filterHandler);
            });

            this.#view.editTitleSaveBtn.addEventListener('click', this.#saveEditHandler);

            this.#view.categoryFilterSelect.addEventListener('change', this.#categoryFilterHandler);
        });
    }

    #onLoadHandler = () => {
        const notes = this.#model.getFiltered();
        this.#view.renderAll(notes);
        this.#view.updateStats(this.#model.getStats());
        this.#view.updateSortBtn(this.#model.sortNewest);
    }

    #submitHandler = (e) => {
        e.preventDefault();
        const title = this.#view.titleInput.value;
        const category = this.#view.selectInput.value;

        try {
            this.#view.clearError();
            const note = this.#model.create({ title, category });
            if (note) {
                this.#rerender();
                this.#view.form.reset();
            }
        } catch (err) {
            this.#view.showError(err.message);
        }
    }

    #listClickHandler = ({ target }) => {
        const card = target.closest('[data-id]');
        if (!card) return;
        const id = Number(card.getAttribute('data-id'));

        if (target.closest('[data-remove-btn]')) {
            this.#model.delete(id);
            this.#rerender();
        }

        if (target.closest('[data-important-btn]')) {
            this.#model.toggleImportant(id);
            this.#rerender();
        }

        if (target.closest('[data-edit-btn]')) {
            this.#editTitleHandler(id, card);
        }
    }

    #editTitleHandler = (id, card) => {
        const currentTitle = card.querySelector('.note-title').textContent;
        this.#editingId = id;
        this.#view.openEditModal(currentTitle);
    }

    #saveEditHandler = () => {
        const newTitle = this.#view.editTitleInput.value;
        const updated = this.#model.updateTitle(this.#editingId, newTitle);

        if (updated) {
            this.#view.updateTitleUI(this.#editingId, newTitle.trim());
            this.#view.closeEditModal();
            this.#editingId = null;
        } else {
            this.#view.showEditError('Title має бути мінімум 3 символи.');
        }
    }

    #sortHandler = () => {
        this.#model.sortNewest = !this.#model.sortNewest;
        this.#view.updateSortBtn(this.#model.sortNewest);
        this.#rerender();
    }

    #filterHandler = (e) => {
        const filterType = e.currentTarget.getAttribute('data-filter');
        this.#model.filterState.type = filterType;
        this.#view.setActiveFilter(filterType);

        const catSelect = this.#view.categoryFilterSelect;
        catSelect.style.display = filterType === 'category' ? 'inline-block' : 'none';

        this.#rerender();
    }

    #categoryFilterHandler = (e) => {
        this.#model.filterState.category = e.target.value;
        this.#rerender();
    }

    #clearAllHandler = () => {
        this.#model.clearAll();
        this.#rerender();
    }

    #rerender = () => {
        const notes = this.#model.getFiltered();
        this.#view.renderAll(notes);
        this.#view.updateStats(this.#model.getStats());
    }
}

export default Controller;