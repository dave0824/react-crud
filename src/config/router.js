import Home from '../containers/home/home'
import CompanyFrom from '../containers/companyFrom/campanyFrom'
import UserList from '../containers/userList/userList'

/**
 * 导航栏路由配置
 * @type {*[]}
 */
const menuList = [
    {
        title: '首页',
        key: '/home',
        component: Home
    },
    {
        title: '导航1',
        key: '/from',
        children: [
            {
                title: '页面1',
                key: '/from/companyFrom',
                component: CompanyFrom
            },
            {
                title: '页面2',
                key: '/from/user',
                component: UserList
            },
            {
                title: '页面3',
                key: '/from/loadings',
            },
        ]
    },
    {
        title: '导航2',
        key: '/user',
        children: [
            {
                title: '页面1',
                key: '/user/login',
            },
            {
                title: '页面2',
                key: '/user/reg',
            }
        ]
    },
];
export default menuList;