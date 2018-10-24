import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Api from "../../util/api";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            dataTeam: []
        }
    }

    async componentDidMount() {
        const itemId = this.props.navigation.getParam('id');
        const idEquipo = this.props.navigation.getParam('idTeam');
        const data = await Api.getPlayer(itemId);

        this.saveData(data)

        const dataE = await Api.getPlayers(idEquipo);
        this.saveEquipo(dataE)

    }

    saveData(data) {
        this.setState({
            dataSource: data.player
        })
    }

    saveEquipo(dataE) {
        this.setState({
            dataTeam: data.teams
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.colums}>
                    <View style={styles.rows}>
                        <View style={styles.image_perfil}>
                            <View style={styles.marco}>
                                <Text> { this.state.dataTeam.strTeam }</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        );
    }


}

export default Detalle;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bcccf0'
    },
    colums: {
        flex: 1,
        flexDirection: 'column'
    },
    rows: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image_perfil: {
        marginTop: 50
    },
    marco: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#575451',
    },
});