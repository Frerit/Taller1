import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const PlayerCard = (props) =>
    (
        <TouchableOpacity  style={styles.lista}
                           onPress={() => props.navigation.navigate('Detalle', {
                               id: props.item.idPlayer,
                               idTeam: props
                           })}>
            <View  style={styles.colums}>
                <View style={styles.rows }>
                    <Image style={styles.imageRoud} source={{uri: props.item.strCutout }}/>
                    <View style={styles.rows}>
                        <Text style={{marginTop: 5}}> {props.item.strPlayer} </Text>
                    </View>

                    <Icon style={styles.icons} name="angle-right" size={30} color="#8A8A8A" />
                </View>
            </View>
        </TouchableOpacity>
    );

export default PlayerCard;

const styles = StyleSheet.create({
    lista: {
        elevation: 1,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        shadowColor: 'rgb(75, 89, 101)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    tumnail: {
        flex: 1
    },
    icons: {
        marginTop: 3
    },
    colums: {
        flex: 1,
        flexDirection: 'column',
    },
    rows: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    imageRoud: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        marginBottom: 5,
    },
})