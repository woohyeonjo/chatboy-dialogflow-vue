import Vue from 'vue'
import Vuex from 'vuex'
import { chat } from './modules/chat.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: { chat }
});