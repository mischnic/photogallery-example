import { observable, action } from 'mobx';
import { API_URL } from '~/config/index';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default class GalleryStore {
  limit = 10;

  @observable
  photos: Photo[] = [];

  @observable
  page = 1;

  @action
  setPreviousPage = () => {
    if (this.page === 1) {
      return;
    }

    this.page -= 1;
    this.fetchPhotos();
  };

  @action
  setNextPage = () => {
    this.page += 1;
    this.fetchPhotos();
  };

  @action
  fetchPhotos = async () => {
    try {
      const response = await fetch(
        `${API_URL}/photos?_limit=${this.limit}&_page=${this.page}`
      );
      const result = await response.json();
      this.photos = result;
    } catch (err) {
      console.error(err);
    }
  };
}
