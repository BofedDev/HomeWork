'use strict';

class Model {
    constructor() {
        this.users = [];
        this.albums = [];
        this.allPhotos = [];
        this.offset = 0;
    }

    fetchUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.users = data;
                return this.users;
            });
    }

    fetchAlbums(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.albums = data;
                return this.albums;
            });
    }

    fetchPhotos(albumId) {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.allPhotos = data;
                this.offset = 0;
                return this.allPhotos;
            });
    }

    getNextPhotos(count = 12) {
        const photos = this.allPhotos.slice(this.offset, this.offset + count);
        this.offset += count;
        return photos;
    }

    hasMorePhotos() {
        return this.offset < this.allPhotos.length;
    }
}

export default Model;