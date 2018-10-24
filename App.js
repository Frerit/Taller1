import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Teams from "./app/scenes/teams";
import Player from "./app/scenes/player";
import Detalle from "./app/scenes/detalle";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigation/>
    );
  }
}


export const AppNavigation =  createStackNavigator({
    Teams:  Teams ,
    Player:  Player ,
    Detalle:  Detalle
});