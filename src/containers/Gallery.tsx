import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import * as _ from 'lodash-es';
import * as styles from 'styles/containers/Gallery.scss';
import GalleryStore from 'stores/GalleryStore';
import Thumbnail from 'components/Thumbnail';

interface Props {
  galleryStore: GalleryStore;
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
    const { galleryStore } = this.props;
    galleryStore.fetchPhotos();

    document.addEventListener('keydown', this.handleKeyEvents);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyEvents);
  };

  handleKeyEvents = (e: KeyboardEvent) => {
    const { galleryStore } = this.props;

    e.preventDefault();
    const { code } = e;

    switch (code) {
      default:
        break;
      case 'ArrowLeft':
        galleryStore.setPreviousPage();
        break;
      case 'ArrowRight':
        galleryStore.setNextPage();
        break;
    }
  };

  renderPhotos = () => {
    const { galleryStore } = this.props;
    const { photos } = galleryStore;

    return _.map(photos, (photo, i) => {
      const { id, title, thumbnailUrl: url } = photo;
      return (
        <GalleryItem i={i} className={styles.link} key={id}>
          <Link to={`/photo/${id}`}>
            <Thumbnail title={title} url={url} />
          </Link>
        </GalleryItem>
      );
    });
  };

  renderPagination = () => {
    const { galleryStore } = this.props;

    return (
      <React.Fragment>
        <button
          onClick={galleryStore.setPreviousPage}
          className={styles.pagination__button}
        >
          Previous
        </button>
        <span className={styles.pagination__page}>
          Page {galleryStore.page}
        </span>
        <button
          onClick={galleryStore.setNextPage}
          className={styles.pagination__button}
        >
          Next
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className={styles.wrapper} onKeyDown={console.log} tabIndex={-1}>
        <div className={styles.gallery} onKeyDown={console.log}>
          <PoseGroup>{this.renderPhotos()}</PoseGroup>
        </div>
        <div className={styles.pagination}>{this.renderPagination()}</div>
      </div>
    );
  }
}
