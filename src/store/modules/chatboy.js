import dialogFlow from '@/api/dialogFlowAPI.js';
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
    chatLog: storage.fetch()
};

const getters = {
    storedChatLog(state) {
        return state.chatLog;
    }
};

const mutations = {
    sendMessage(state, chat) {
        const current = util.getNow();
        const to = { to: true, from: false, text: chat, when: current };

        sessionStorage.setItem(current.date + " / " + current.time, JSON.stringify(to));
        state.chatLog.push(to);

    },
    receiveMessage(state) {
        // const current = util.getNow();
        // const chat = questionToChatboy();
        // const from = { to: false, from: true, text: chat, when: current };
        //
        // sessionStorage.setItem(current.date + " / " + current.time, JSON.stringify(from));
        // state.chatLog.push(from);
    },
    questionToChatboy(state) {
        // API Call
        // return result
    },

};

export default {
    state,
    getters,
    mutations
}