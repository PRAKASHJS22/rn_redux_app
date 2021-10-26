import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import Counter from './src/components/Counter';
import AddTodo from './src/components/AddTodo';
import TodoList from './src/components/TodoList';
import Store from './src/redux/store/Store';


const App =()=> {
  return (
   <Provider store={Store}>
      <Counter/>
      <AddTodo/>
      {/* <TodoList/> */}
   </Provider>
  );
};

export default App;