import * as React from 'react';
import * as styles from 'styles/containers/Gallery.scss';
import Photo from 'components/Photo';

export default class Gallery extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    );
  }
}
