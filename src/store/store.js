import Vue from 'vue'
import Vuex from 'vuex'
import chatboy from './modules/chatboy.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        chatboy,
    }
});