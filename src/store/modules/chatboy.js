import dialogFlow from '@/api/dialogFlowAPI.js';

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; ++i) {
                // TODO: 로컬 스토리지 불필요한 정보 예외처리 조정 필요
                if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue;
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
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
        const currentDate = new Date();
        const to = { to: true, from: false, text: chat, date: currentDate }

        localStorage.setItem(currentDate, JSON.stringify(to));
        state.chatLog.push(to);
    },

};

export default {
    state,
    getters,
    mutations
}