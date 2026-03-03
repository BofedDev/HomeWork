'use strict';

class Controller {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    init() {
        this.loadUsers();
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.#view.userSelect.addEventListener('change', () => {
            this.handleUserChange();
        });

        this.#view.albumSelect.addEventListener('change', () => {
            this.handleAlbumChange();
        });

        this.#view.loadBtn.addEventListener('click', () => {
            this.handleLoadPhotos();
        });
    }

    loadUsers() {
        this.#view.showStatus('Loading users...');

        this.#model.fetchUsers()
            .then(users => {
                this.#view.selectUsers(users);
                this.#view.clearStatus();
            })
            .catch(error => {
                this.#view.showError(`Error: ${error.message}`);
            });
    }

    handleUserChange() {
        const userId = this.#view.userSelect.value;
        if (!userId) return;

        this.#view.clearPhotos();
        this.#view.disableAlbumSelect();
        this.#view.disableLoadBtn();
        this.#view.showStatus('Loading albums...');

        this.#model.fetchAlbums(userId)
            .then(albums => {
                this.#view.selectAlbums(albums);
                this.#view.enableAlbumSelect();
                this.#view.clearStatus();
            })
            .catch(error => {
                this.#view.showError(`Error: ${error.message}`);
            });
    }

    handleAlbumChange() {
        const albumId = this.#view.albumSelect.value;
        if (albumId) {
            this.#view.enableLoadBtn();
        } else {
            this.#view.disableLoadBtn();
        }
    }

    handleLoadPhotos() {
        const albumId = this.#view.albumSelect.value;
        if (!albumId) return;

        this.#view.clearPhotos();
        this.#view.showStatus('Loading photos...');

        this.#model.fetchPhotos(albumId)
            .then(() => {
                const photos = this.#model.getNextPhotos(12);
                this.#view.renderPhotos(photos);

                if (this.#model.hasMorePhotos()) {
                    this.#view.renderLoadMoreBtn(() => this.handleLoadMore());
                }

                this.#view.clearStatus();
            })
            .catch(error => {
                this.#view.showError(`Error: ${error.message}`);
            });
    }

    handleLoadMore() {
        const photos = this.#model.getNextPhotos(12);
        this.#view.renderPhotos(photos, true);

        if (!this.#model.hasMorePhotos()) {
            this.#view.removeLoadMoreBtn();
        }
    }
}

export default Controller;