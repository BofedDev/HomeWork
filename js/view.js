'use strict';

class View {
    constructor() {
        this.userSelect = document.getElementById('userSelect');
        this.albumSelect = document.getElementById('albumSelect');
        this.loadBtn = document.getElementById('loadBtn');
        this.statusContainer = document.getElementById('status');
        this.photosCont = document.getElementById('photos');

        // Проверка элементов
        if (!this.photosCont) {
            console.error('Element #photos not found!');
        }
        if (!this.loadBtn) {
            console.error('Element #loadBtn not found!');
        }
    }

    showStatus(data) {
        this.statusContainer.textContent = data;
        this.statusContainer.className = 'loading';
    }

    clearStatus() {
        this.statusContainer.textContent = '';
        this.statusContainer.className = '';
    }

    showError(message) {
        this.statusContainer.textContent = message;
        this.statusContainer.className = 'error';
    }

    selectUsers(data) {
        if (!Array.isArray(data) || data.length === 0) {
            this.userSelect.innerHTML = '<option value="">Користувачі відсутні</option>';
            return;
        }

        let users = '<option value="" disabled selected>Оберіть користувача...</option>';
        for (const user of data) {
            users += `<option value="${user.id}">${user.name}</option>`;
        }

        this.userSelect.innerHTML = users;
    }

    selectAlbums(data) {
        if (!Array.isArray(data) || data.length === 0) {
            this.albumSelect.innerHTML = '<option value="">Альбоми відсутні</option>';
            return;
        }

        let album = '<option value="" disabled selected>Оберіть альбом...</option>';

        for (const albums of data) {
            album += `<option value="${albums.id}">${albums.title}</option>`;
        }

        this.albumSelect.innerHTML = album;
    }

    clearPhotos() {
        this.photosCont.innerHTML = '';
        this.removeLoadMoreBtn();
    }

    enableAlbumSelect() {
        this.albumSelect.disabled = false;
    }

    disableAlbumSelect() {
        this.albumSelect.disabled = true;
        this.albumSelect.innerHTML = '<option value="">Оберіть альбом...</option>';
    }

    enableLoadBtn() {
        this.loadBtn.disabled = false;
    }

    disableLoadBtn() {
        this.loadBtn.disabled = true;
    }

    renderPhotos(photos, append = false) {
        if (!append) {
            this.photosCont.innerHTML = '';
        }

        photos.forEach(photo => {
            const card = this.createPhotoCard(photo);
            this.photosCont.appendChild(card);
        });
    }

    createPhotoCard(photo) {
        const card = document.createElement('div');
        card.className = 'photo-card';

        const title = photo.title.length > 40
            ? photo.title.substring(0, 40) + '...'
            : photo.title;

        card.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="${photo.title}">
            <p>${title}</p>
            <a href="${photo.url}" target="_blank">Open</a>
        `;

        return card;
    }

    renderLoadMoreBtn(callback) {
        this.removeLoadMoreBtn();

        const btn = document.createElement('button');
        btn.id = 'loadMoreBtn';
        btn.className = 'load-more-btn';
        btn.textContent = 'Load More';
        btn.onclick = callback;

        this.photosCont.parentElement.appendChild(btn);
    }

    removeLoadMoreBtn() {
        const btn = document.getElementById('loadMoreBtn');
        if (btn) {
            btn.remove();
        }
    }
}

export default View;