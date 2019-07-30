import Chatboy from './components/Chatboy'

const install = (Vue) => {
    Vue.component(Chatboy.name, Chatboy)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Chatboy
}

export default install