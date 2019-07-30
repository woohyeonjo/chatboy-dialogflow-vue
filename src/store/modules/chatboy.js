import { dialogFlow } from "../../api/dialogFlowAPI";
import { util } from '../../assets/util/util.js';

const storage = {
    fetch() {
        const arr = [];
        if (sessionStorage.length > 0) {
            for (let i = 0; i < sessionStorage.length; ++i) {
                arr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
            }
        }
        return arr;
    },
};

const state = {
    chatLog: storage.fetch(),
    access_info: '',
};

const getters = {
    storedChatLog(state) {
        return state.chatLog;
    },
    getLength(state) {
        return state.chatLog.length;
    },
    getAccessKey(state) {
        return state.access_info;
    }
};

const mutations = {
    setAccessKey(state, payload) {
        state.access_info = payload;
    },
    sendMessage(state, chat) {
        const current = util.getNow();
        const to = { to: true, from: false, text: chat, when: current };

        sessionStorage.setItem(current.date + " / " + current.detailTime, JSON.stringify(to));
        state.chatLog.push(to);
    },
    receiveMessage(state, chat) {
        const current = util.getNow();
        const from = { to: false, from: true, text: chat, when: current };

        sessionStorage.setItem(current.date + " / " + current.detailTime, JSON.stringify(from));
        state.chatLog.push(from);
    }
};

const actions = {
    async question(context) {
        const chat = await dialogFlow.detectIntent(context.state.chatLog[context.getters.getLength - 1].text);
        context.commit('receiveMessage', chat);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}