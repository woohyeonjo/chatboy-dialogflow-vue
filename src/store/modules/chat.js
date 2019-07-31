import { dialogFlow } from "../../api/dialogFlowAPI";
import { util } from '../../assets/util/util.js';

export const chat = {
    state: {
        chatLog: util.fetch(),
        access_info: '',
    },
    getters: {
        storedChatLog(state) {
            return state.chatLog;
        },
        getLength(state) {
            return state.chatLog.length;
        },
        getAccessKey(state) {
            return state.access_info;
        }
    },
    mutations: {
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
    },
    actions: {
        async question(context) {
            const chat = await dialogFlow.detectIntent(context.state.chatLog[context.getters.getLength - 1].text);
            context.commit('receiveMessage', chat);
        },
    }
}