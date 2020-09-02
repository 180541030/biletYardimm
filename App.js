import React, { Component } from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import TabBar from './src/navigators/TabBar';

const AppNavigator = createStackNavigator({
  TabBar: { screen: TabBar, navigationOptions: { header: null } },
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    );
  }
}
