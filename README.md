# 项目简介
该项目提供一个非常简洁的后台管理ui界面,非常适合初学者学习使用。
## 技术栈
    - react
    - antd
    - react-router-dom
    - redux 相关依赖已配置好，需要的即用即可

 ## 菜单配置具体实现
 菜单配置文件为config下的router.js文件,如下
 ```
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
 ```
其中title为菜单栏的标题，key为匹配路径，component为展示的组件。
若有其它去求可自行扩展属性，如添加一个display属性，作为是否在菜单栏显示

### 菜单栏配置
读取router.js文件，递归menuList配置导航栏的菜单名和对应链接
```
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}><Link to={item.key}>{item.title}</Link></Menu.Item>
    })
  }
```
### 路由配置
在主页面main.jsx中，路由配置读取router.js配置文件，遍历获取path对应的component，
对定义了菜单但未定义组件的页面显示友好的开发中界面
```
 renderRouter = data => {
        data.forEach((item,index) => {

            if(item.children){// 如果子路由存在,渲染子路由
                this.renderRouter(item.children)
            }

            if (item.component) { // 如果组件属性存在。则渲染原本组件
                const router = <Route key = {index} path = {item.key} component = {item.component}  />;

                let routerList = this.state.routerList;
                routerList.push(router)
                this.setState({
                    routerList
                })
            }else{ // 组件不存在就渲染页面开发中的友好组件
                const router = <Route key = {index} path = {item.key} component = {NoDevelopment} />;

                let routerList = this.state.routerList;
                routerList.push(router)
                this.setState({
                    routerList
                })
            }

        })
    }
```
## axios封装配置
对axios请求进行封装，拼接post的请求参数到url后。具体配置文件在api目录下

## 运行界面

![login](./asset\images\login.png)
![register](./asset\images\register.png)
![main](./asset\images\main.png)
![form](./asset\images\form.png)
![other](./asset\images\other.png)
