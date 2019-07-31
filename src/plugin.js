import Chatboy from './components/Chatboy'
import { chat } from './store/modules/chat.js'

const install = (Vue, options={}) => {
    if ( !options.store ) return new Error('Please provide a store!');

    Vue.component(Chatboy.name, Chatboy);

    options.store.registerModule('chatboy', chat);
}

export default install