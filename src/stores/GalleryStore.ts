import { observable, action } from 'mobx';
import { API_URL } from '~/config/index';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

export default class GalleryStore {
  photoLimit = 10;
  albumLimit = 10;

  @observable
  photos: Photo[] = [];

  @observable
  albums: Album[] = [];

  @observable
  photoPage = 1;

  @observable
  albumPage = 1;

  @action
  setPreviousPhotoPage = () => {
    if (this.photoPage === 1) {
      return;
    }

    this.photoPage -= 1;
    this.fetchPhotos();
  };

  @action
  setNextPhotoPage = () => {
    this.photoPage += 1;
    this.fetchPhotos();
  };

  setPreviousAlbumPage = () => {
    if (this.albumPage === 1) {
      return;
    }

    this.albumPage -= 1;
    this.fetchAlbums();
  };

  @action
  setNextAlbumPage = () => {
    this.albumPage += 1;
    this.fetchAlbums();
  };

  @action
  fetchPhotos = async (albumId?: number) => {
    try {
      const url = albumId
        ? `${API_URL}/photos?_limit=${this.photoLimit}&_page=${this.albumPage}`
        : `${API_URL}/photos?_limit=${this.photoLimit}&_page=${this.photoPage}`;

      const response = await fetch(url);
      const result = await response.json();
      this.photos = result;
    } catch (err) {
      console.error(err);
    }
  };

  @action
  fetchAlbums = async () => {
    try {
      const response = await fetch(
        `${API_URL}/albums?_limit=${this.albumLimit}&_page=${this.albumPage}`
      );
      const result = await response.json();
      this.albums = result;
    } catch (err) {
      console.error(err);
    }
  };
}
