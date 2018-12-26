export function getToken() {

    if (!JSON.parse(window.localStorage.getItem('vuex'))) {
        return null;
    }
    if (JSON.parse(window.localStorage.getItem('vuex'))['user']) {
        let token = JSON.parse(window.localStorage.getItem('vuex'))['user']['token']
        return token ? token : null;
    }
    return null
}

export function getMenuTree() {

    if (!JSON.parse(window.localStorage.getItem('vuex'))) {
        return null;
    }
    if (JSON.parse(window.localStorage.getItem('vuex'))['user']) {
        return JSON.parse(window.localStorage.getItem('vuex'))['user']['menuList'];
    }
    return null
}

export function cleanToken() {
    window.localStorage.removeItem('vuex')
}