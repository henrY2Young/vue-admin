import networkNotoken from '../utils/networkwithnotoken';
// import network from '../utils/network';

const userApi = {};
userApi.login = params => {
    return networkNotoken.post('/admin/user/login',params)
}

export default userApi;