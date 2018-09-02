import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from 'stores/RootStore';
import Gallery from 'containers/Gallery';
import * as styles from 'styles/containers/App.scss';

const rootStore = new RootStore();

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Provider {...rootStore}>
          <Router>
            <Route exact path="/" component={Gallery} />
          </Router>
        </Provider>
      </div>
    );
  }
}
