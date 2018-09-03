import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'stores/RootStore';
import Gallery from 'containers/Gallery';
import PhotoDetails from 'containers/PhotoDetails';
import * as styles from 'styles/containers/App.scss';

const rootStore = new RootStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Router>
          <div className={styles.wrapper}>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/photo/:photoId" component={PhotoDetails} />
          </div>
        </Router>
      </Provider>
    );
  }
}
