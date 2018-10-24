import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import PlayerCard from "./component/player-card";
import Api from "../../util/api";


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    _renderItem = ({item}) => (
        <PlayerCard item={item} navigation={this.props.navigation}
        />
    );

    async componentDidMount() {
        const itemId = this.props.navigation.getParam('id');
        const data = await Api.getPlayers(itemId);
        this.saveData(data)
        console.log('||||||  '+ itemId + '|||' + data.player)
    }

    saveData(data) {
        this.setState({
            dataSource: data.player
        })
    }

    render() {

        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default Player;