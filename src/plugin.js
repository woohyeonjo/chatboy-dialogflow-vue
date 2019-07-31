import Chatboy from './components/Chatboy'
import { chatboyStore } from './store/modules/chatboyStore.js'

const install = (Vue, options={}) => {
    if ( !options.store ) return new Error('Please provide a index!');

    Vue.component(Chatboy.name, Chatboy);

    options.store.registerModule('chatboy', chatboyStore);
}

export default install