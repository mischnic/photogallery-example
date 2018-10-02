import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import posed, { PoseGroup } from 'react-pose';
import RootStore from '~/stores/RootStore';
import * as styles from '~/styles/containers/App.scss';
import Gallery from '~/containers/Gallery';
import PhotoDetails from '~/containers/PhotoDetails';

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
              <span>Photo Gallery</span>
              {location.pathname !== '/' && <Link to="/">Back to gallery</Link>}
            </div>
            <div className={styles.content}>
              <PoseGroup>
                <RouteContainer key={location.key || '/'}>
                  <Switch location={location}>
                    <Route exact path="/" component={Gallery} />
                    <Route
                      exact
                      path="/photo/:photoId"
                      component={PhotoDetails}
                    />
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
