import dialogFlow from '@/api/dialogFlowAPI.js';

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
        const now = new Date();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const current = {
            date: `${now.getMonth()}월 ${now.getDate()}일 ${week[now.getDay()]}요일`,
            time: `${now.getHours()} : ${now.getMinutes()}`
        };
        const to = { to: true, from: false, text: chat, when: current };

        sessionStorage.setItem(current.date + " / " + current.time, JSON.stringify(to));
        state.chatLog.push(to);
    },

};

export default {
    state,
    getters,
    mutations
}