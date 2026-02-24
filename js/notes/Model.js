'use strict';

class Model {
    constructor() {
        this.notes = this.loadFromStorage() || [];
        this.filterState = { type: 'all', category: 'all' };
        this.sortNewest = true;
    }

    loadFromStorage() {
        const data = localStorage.getItem('notes');
        return data ? JSON.parse(data) : null;
    }

    saveToStorage() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    isValidate(data) {
        if (!data || typeof data !== 'object') return false;

        const { title, category } = data;

        if (typeof title !== 'string' || title.trim().length < 3) {
            throw new Error('Заголовок повинен бути мінімум 3 символи.');
        }

        if (!['work', 'study', 'personal'].includes(category)) {
            throw new Error('Категорія має бути одна з: work, study, personal.');
        }

        return true;
    }

    create(data) {
        if (!this.isValidate(data)) return null;

        const note = {
            id: Date.now(),
            title: data.title.trim(),
            category: data.category,
            important: false,
            createdAt: new Date().toISOString()
        };

        this.notes.push(note);
        this.saveToStorage();
        return note;
    }

    updateTitle(id, title) {
        if (typeof title !== 'string' || title.trim().length < 3) return false;
        const note = this.notes.find(n => n.id === id);
        if (!note) return false;
        note.title = title.trim();
        this.saveToStorage();
        return true;
    }

    readAll() {
        return [...this.notes];
    }

    getFiltered() {
        let result = [...this.notes];

        if (this.filterState.type === 'important') {
            result = result.filter(n => n.important);
        } else if (this.filterState.type === 'category') {
            result = result.filter(n => n.category === this.filterState.category);
        }

        result.sort((a, b) => {
            const diff = new Date(b.createdAt) - new Date(a.createdAt);
            return this.sortNewest ? diff : -diff;
        });

        return result;
    }

    getStats() {
        return {
            total: this.notes.length,
            important: this.notes.filter(n => n.important).length
        };
    }

    toggleImportant(id) {
        const note = this.notes.find(n => n.id === id);
        if (!note) return false;
        note.important = !note.important;
        this.saveToStorage();
        return true;
    }

    delete(id) {
        const index = this.notes.findIndex(n => n.id === id);
        if (index === -1) return false;
        this.notes.splice(index, 1);
        this.saveToStorage();
        return true;
    }

    clearAll() {
        this.notes = [];
        this.saveToStorage();
    }
}

export default Model;