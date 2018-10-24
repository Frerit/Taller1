import {API_BASE, _LIST, _PLAYERS, _TEAM} from '../services/config'

class Api {

    async getAllTeams() {
        const API_url = `${API_BASE}${_LIST.getAll}${_LIST.getSoccer}${_LIST.getTeam}`;

        try {
            const query = await fetch(API_url);
            const data = await query.json();
            return data;
        } catch (e) {
            console.log(e);
        }
        return promise;
    }

    async getPlayers(playerid) {
        const  API_url = `${API_BASE}${_PLAYERS.getAll}${playerid}`;
        console.log(API_url);
        try {
            const query = await fetch(API_url);
            const data = await query.json();
            return data;

        } catch (e) {
            console.log(e);
        }
        return promise;
    }

    async getPlayer(playerid) {
        const  API_url = `${API_BASE}${_PLAYER.getAll}${playerid}`;
        console.log(API_url);
        try {
            const query = await fetch(API_url);
            const data = await query.json();
            return data;

        } catch (e) {
            console.log(e);
        }
        return promise;
    }

    async getPlayer(Equipo) {
        const  API_url = `${API_BASE}${_TEAM.getTeam}${Equipo}`;
        console.log(API_url);
        try {
            const query = await fetch(API_url);
            const data = await query.json();
            return data;

        } catch (e) {
            console.log(e);
        }
        return promise;
    }
}

export default new Api;