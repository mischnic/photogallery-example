import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash-es';
import * as styles from 'styles/containers/Gallery.scss';
import GalleryStore from 'stores/GalleryStore';
import Thumbnail from 'components/Thumbnail';

interface Props {
  galleryStore: GalleryStore;
}

interface State {}

@inject('galleryStore')
@observer
export default class Gallery extends React.Component<Props, State> {
  componentDidMount = () => {
    const { galleryStore } = this.props;
    galleryStore.fetchPhotos();
  };

  renderPhotos = () => {
    const { galleryStore } = this.props;
    const { photos } = galleryStore;

    return _.map(photos, photo => {
      const { id, title, thumbnailUrl: url } = photo;
      return (
        <Link className={styles.link} key={id} to={`/photo/${id}`}>
          <Thumbnail title={title} url={url} />
        </Link>
      );
    });
  };

  render() {
    return <div className={styles.wrapper}>{this.renderPhotos()}</div>;
  }
}
