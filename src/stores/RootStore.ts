import GalleryStore from './GalleryStore';

export default class RootStore {
  galleryStore: GalleryStore;

  constructor() {
    this.galleryStore = new GalleryStore();
  }
}
