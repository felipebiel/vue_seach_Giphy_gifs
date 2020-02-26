//importa o vue
import Vue from 'vue'
//importa o vuex
import Vuex from 'vuex'

//importar cada vuex especifico 
import gif from "./gifs/gif"

//vue usa o vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        //aqui vem a importação de todos os vuex dos modulos exemplo abaixo:
        gif
    }
})

export default store