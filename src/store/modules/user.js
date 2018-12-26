import PerssionApi from '../../api/perssion'

const user = {
    state: {
        token: '',
        refresh_token: '',
        username: '',
        menuList: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.username = name;
        },
        SET_REFRESH_TOKEN: (state, refresh_token) => {
            state.refresh_token = refresh_token
        },
        SET_MENULIST: (state, menuList) => {
            state.menuList = menuList
        },
    },
    actions: {
        LOGIN({commit}, userInfo) {
            if (userInfo) {
                commit('SET_TOKEN', userInfo.token);
                commit('SET_REFRESH_TOKEN', userInfo.refresh_token);
                commit('SET_NAME', userInfo.username);
                commit('SET_MENULIST', userInfo.menuList)
            }
        },
        LOGINOUT({commit}) {
            commit('SET_TOKEN', '');
            commit('SET_REFRESH_TOKEN', '');
            commit('SET_MENULIST', []);
        },
        INIT_MENU({commit},mennuList){
            commit('SET_MENULIST',mennuList)
        }

    }
}
export default user