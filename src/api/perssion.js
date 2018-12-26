import network from '../utils/network';

const perssion = {}
perssion.getMenuList = () => {
    return network.post('admin/user/getMenu')
}
perssion.authenticateUrl = (params) => {
    return network.post('admin/user/authenticateUrl', params)
}
perssion.getRouter = () => {
    return network.post('/admin/user/getRouter')
}
perssion.addRouter = (params) => {
    return network.post('/admin/user/addRouter', params)
}
perssion.delRouter = (params) => {
    return network.post('/admin/user/delRouterByid', params)
}
perssion.getRouterById = (params) => {
    return network.post('/admin/user/getRouterByid', params)
}
perssion.updateRouter = (params) => {
    return network.post('/admin/user/updateRouter', params)
}
perssion.getPermissionList =()=>{
    return network.post('/admin/user/getPermissionList')
}
perssion.getPermissionById =(params)=>{
    return network.post('/admin/user/getPermissionByid',params)
}
perssion.updatePremission=(params)=>{
    return network.post('/admin/user/updatePermission',params)
}
perssion.addPermission=(params)=>{
    return network.post('/admin/user/addPermission',params)
}

export default perssion;