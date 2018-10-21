import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import * as _ from 'lodash-es';
import * as styles from '~/styles/containers/Gallery.scss';
import GalleryStore from '~/stores/GalleryStore';
import Thumbnail from '~/components/Thumbnail';

interface Props {
  galleryStore: GalleryStore;
  match: {
    params: {
      albumId: number;
    };
  };
}

interface State {}

const GalleryItem = posed.div({
  enter: { opacity: 1, delay: ({ i }: { i: number }) => i * 25 },
  exit: { opacity: 0 },
});

@inject('galleryStore')
@observer
export default class Gallery extends React.Component<Props, State> {
  componentDidMount = () => {
    const {
      galleryStore,
      match: {
        params: { albumId },
      },
    } = this.props;
    galleryStore.fetchPhotos(albumId);

    document.addEventListener('keydown', this.handleKeyEvents);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyEvents);
  };

  handleKeyEvents = (e: KeyboardEvent) => {
    const {
      galleryStore,
      match: {
        params: { albumId },
      },
    } = this.props;

    const { code } = e;

    switch (code) {
      default:
        break;
      case 'ArrowLeft':
        const prevHandler = albumId
          ? galleryStore.setPreviousAlbumPage
          : galleryStore.setPreviousPhotoPage;
        prevHandler();
        break;
      case 'ArrowRight':
        const nextHandler = albumId
          ? galleryStore.setNextAlbumPage
          : galleryStore.setNextPhotoPage;
        nextHandler();
        break;
    }
  };

  renderPhotos = () => {
    const { galleryStore } = this.props;
    const { photos } = galleryStore;

    return _.map(photos, (photo, i) => {
      const { id, title, thumbnailUrl: url } = photo;
      return (
        <GalleryItem i={i} key={id}>
          <Link className={styles.link} to={`/photo/${id}`}>
            <Thumbnail title={title} url={url} />
          </Link>
        </GalleryItem>
      );
    });
  };

  renderPagination = () => {
    const {
      galleryStore,
      match: {
        params: { albumId },
      },
    } = this.props;

    return (
      <React.Fragment>
        <button
          onClick={
            albumId
              ? galleryStore.setPreviousAlbumPage
              : galleryStore.setPreviousPhotoPage
          }
          className={styles.pagination__button}
        >
          Previous
        </button>
        <span className={styles.pagination__page}>
          Page {albumId ? galleryStore.albumPage : galleryStore.photoPage}
        </span>
        <button
          onClick={
            albumId
              ? galleryStore.setNextAlbumPage
              : galleryStore.setNextPhotoPage
          }
          className={styles.pagination__button}
        >
          Next
        </button>
      </React.Fragment>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.wrapper} tabIndex={-1}>
        <div className={styles.gallery}>
          <PoseGroup>{this.renderPhotos()}</PoseGroup>
        </div>
        <div className={styles.pagination}>{this.renderPagination()}</div>
      </div>
    );
  }
}
