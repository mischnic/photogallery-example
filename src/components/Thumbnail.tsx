import * as React from 'react';
import * as styles from '~/styles/components/Thumbnail.scss';

const Thumbnail = ({ title, url }: { title: string; url: string }) => (
  <React.Fragment>
    <div className={styles.top}>
      <img className={styles.img} src={url} />
    </div>
    <div className={styles.bottom}>{title}</div>
  </React.Fragment>
);
export default Thumbnail;
