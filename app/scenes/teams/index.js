import React, {Component} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TeamCard from "./component/team-card";
import Api from './../../util/api'

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    async componentDidMount() {
        const data = await Api.getAllTeams();
        this.saveData(data)
        console.log('||||||  ' + data.teams)
    }

    static navigationOptions = {
        title: 'Equipos',
    };

    _renderItem = ({item}) => (
        <TeamCard item={item} navigation={this.props.navigation}
        />
    );

    saveData(data) {
        this.setState({
            dataSource: data.teams
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default Teams;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})