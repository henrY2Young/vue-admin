const app = {
    state: {
        sidebar: {
            open: true
        },
        breadcrumb: [
            {
                name: '首页',
                url: '/'
            }
        ]
    },
    mutations: {
        SET_SIDEBAR: state => {
            if (!state.sidebar.open) {
                state.sidebar.open = true;
            } else {
                state.sidebar.open = false;
            }
        },
        CLOSE_SIDEBAR: state => {
            if (!state.sidebar.open) {
                state.sidebar.open = false;
            }
        },
        SET_BREADCRUMB: (state, list) => {
            state.breadcrumb = list;
        }
    },
    actions: {
        set_sidebar({commit}) {
            commit('SET_SIDEBAR');

        },
        close_sidebar({commit}) {
            commit('CLOSE_SIDEBAR')
        },
        set_breadcrumb({commit},list){
            commit('SET_BREADCRUMB',list)
        }
    }
};
export default app;