import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from 'containers/Gallery';
import * as styles from 'styles/containers/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Router>
          <Route exact path="/" component={Gallery} />
        </Router>
      </div>
    );
  }
}
