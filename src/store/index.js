import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        text: '0',
    },
    mutations: {
        textChange(state, newText) {
            state.text = newText;
        } 
    }
});

