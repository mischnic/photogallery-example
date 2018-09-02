import * as React from 'react';
import * as style from 'styles/components/Photo.scss';

const Photo = ({ title, url }: { title: string; url: string }) => (
  <div className={style.wrapper}>
    <img className={style.img} src={url} />
    <p>{title}</p>
  </div>
);
export default Photo;
