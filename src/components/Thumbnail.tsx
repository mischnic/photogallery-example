import * as React from 'react';
import * as styles from '~/styles/components/Thumbnail.scss';

const Thumbnail = ({ title, url }: { title: string; url: string }) => (
  <div className={styles.wrapper}>
    <img className={styles.img} src={url} />
    <p>{title}</p>
  </div>
);
export default Thumbnail;
