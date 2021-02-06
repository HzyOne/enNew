import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import './style.css'
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Login from './components/Login/index'
import NewList from './container/List/index';
import NewDetail from './container/Detail/index'
import Vip from './container/Vip/index'

const { Header, Footer, Content } = Layout;

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1300, height: '100%'}}>
                    <Header className="header">
                        <AppHeader />
                    </Header>
                    <Content className="content">
                        <Login />
                        <Switch>
                        <Route path="/vip" component={ Vip } />
                            <Route path="/detail/:id" component={ NewDetail } />
                            {/* 在根目录地址后面访问/detail目录，会跳转到NewDetail这个组件，Route组件同理 */}
                            <Route path="/:id?" component={ NewList } />
                            {/* url地址后面的参数会赋值给id，子组件会接收到this.props这个对象，该对象存储了id的值 */}
                        </Switch>
                    </Content>
                    <Footer className="footer">@Copyright Hzyone 2020</Footer>
                </Layout>
            </BrowserRouter>
        )
    }

}

ReactDom.render(<App />,
    document.getElementById('root')
)