import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import * as _ from 'lodash-es';
import * as styles from '~/styles/containers/AlbumList.scss';
import GalleryStore from '~/stores/GalleryStore';
import Thumbnail from '~/components/Thumbnail';

interface Props {
  galleryStore: GalleryStore;
}

interface State {}

@inject('galleryStore')
@observer
export default class AlbumList extends React.Component<Props, State> {
  componentDidMount = () => {
    const { galleryStore } = this.props;
    galleryStore.fetchAlbums();
  };

  renderAlbums = () => {
    const { galleryStore } = this.props;
    const { albums } = galleryStore;

    return _.map(albums, (album, i) => {
      const { id, title } = album;
      return (
        <Link key={id} className={styles.link} to={`/album/${id}`}>
          {title}
        </Link>
      );
    });
  };

  renderPagination = () => {
    const { galleryStore } = this.props;

    return (
      <React.Fragment>
        <button
          onClick={galleryStore.setPreviousAlbumPage}
          className={styles.pagination__button}
        >
          Previous
        </button>
        <span className={styles.pagination__page}>
          Page {galleryStore.albumPage}
        </span>
        <button
          onClick={galleryStore.setNextAlbumPage}
          className={styles.pagination__button}
        >
          Next
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <div className={styles.gallery}>{this.renderAlbums()}</div>
        <div className={styles.pagination}>{this.renderPagination()}</div>
      </div>
    );
  }
}
