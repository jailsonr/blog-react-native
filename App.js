import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexSreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';


const navigator = createStackNavigator({
  Index: {screen: IndexSreen}
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
        <App />
  </Provider>
};