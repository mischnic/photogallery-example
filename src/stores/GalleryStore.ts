import { observable } from 'mobx';

interface Photo {
  id: number;
  title: string;
  url: string;
}

export default class GalleryStore {
  @observable
  photos: Photo[] = [
    {
      id: 1,
      title: 'Image 1',
      url: 'https://placekitten.com/300/300',
    },
    {
      id: 2,
      title: 'Image 2',
      url: 'https://placebear.com/300/300',
    },
    {
      id: 3,
      title: 'Image 3',
      url: 'https://fillmurray.com/300/300',
    },
  ];
}
