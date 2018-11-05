import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './store/configureStore';
import AppContainer from './AppContainer';


class App extends React.Component {
  store = configureStore();
 
  render() {

    return (
     <Provider store={this.store}>
        <AppContainer/>
     </Provider>
    );
  }
}

AppRegistry.registerComponent('RestaurantApp', () => App);

export default App;