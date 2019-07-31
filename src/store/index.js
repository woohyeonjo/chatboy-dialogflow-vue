import Vue from 'vue'
import Vuex from 'vuex'
import { chatboyStore } from './modules/chatboyStore.js'

Vue.use(Vuex);

export const index = new Vuex.Store({
    modules: { chat: chatboyStore }
});