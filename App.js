import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import Counter from './src/components/Counter';

import store from './src/redux/store/Store';


const App =()=> {
  return (
   <Provider store={store}>
      <Counter/>
   </Provider>
  );
};

export default App;