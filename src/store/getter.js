const getters = {
    sidebar: state => state.app.sidebar,
    username: state => state.user.username,
    token: state => state.user.token,
    refresh_token: state => state.user.refresh_token,
    menuList: state => state.user.menuList,
}
export default getters;