import * as React from 'react';
import { inject, observer } from 'mobx-react';
import * as styles from 'styles/containers/Gallery.scss';
import GalleryStore from 'stores/GalleryStore';
import Photo from 'components/Photo';

interface Props {
  galleryStore: GalleryStore;
}

interface State {}

@inject('galleryStore')
@observer
export default class Gallery extends React.Component<Props, State> {
  renderPhotos = () => {
    const { galleryStore } = this.props;
    const { photos } = galleryStore;

    return photos.map(photo => <Photo key={photo.id} {...photo} />);
  };

  render() {
    return <div className={styles.wrapper}>{this.renderPhotos()}</div>;
  }
}
