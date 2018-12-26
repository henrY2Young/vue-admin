import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import app from './store/modules/app';
import user from './store/modules/user';
import getter from './store/getter';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user
    },
    getter,
    plugins: [createPersistedState()]
});
export default store