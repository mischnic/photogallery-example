import * as React from 'react';
import { Provider } from 'mobx-react';
import RootStore from 'stores/RootStore';
import Routes from 'routes';
import * as styles from 'styles/containers/App.scss';

const rootStore = new RootStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <div className={styles.wrapper}>
          <Routes />
        </div>
      </Provider>
    );
  }
}
