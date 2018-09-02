import { observable, action } from 'mobx';
import { API_URL } from 'config/index';

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

  @action
  async fetchPhotos() {
    try {
      const response = await fetch(`${API_URL}/photos?_limit=${this.limit}`);
      const result = await response.json();
      this.photos = result;
    } catch (err) {
      console.error(err);
    }
  }
}
