import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import posed, { PoseGroup } from 'react-pose';
import RootStore from '~/stores/RootStore';
import * as styles from '~/styles/containers/App.scss';
import Gallery from '~/containers/Gallery';
import PhotoDetails from '~/containers/PhotoDetails';
import AlbumList from '~containers/AlbumList';

const rootStore = new RootStore();

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 },
});

const App = () => (
  <Provider {...rootStore}>
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <Link className={styles.menuitem} to="/">
                Photo Gallery
              </Link>
              <Link className={styles.menuitem} to="/album">
                Albums
              </Link>
            </div>
            <div className={styles.content}>
              <PoseGroup>
                <RouteContainer key={location.key || '/'}>
                  <Switch location={location}>
                    <Route exact path="/" component={Gallery} />
                    <Route exact path="/album" component={AlbumList} />
                    <Route
                      exact
                      path="/photo/:photoId"
                      component={PhotoDetails}
                    />
                    <Route exact path="/album/:albumId" component={Gallery} />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  </Provider>
);

export default App;
