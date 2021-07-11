import { Component } from 'react'
import { Layout, Menu } from 'antd';
import { FormOutlined, ControlOutlined } from '@ant-design/icons'
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './layout.scss'
const { Sider, Content } = Layout;

class Layouts extends Component {

  state = {
    selectedKeys: ['home']
  }

  setMenu = () => {
    setTimeout(() => {
      this.setState({ selectedKeys: [this.props.location.state]})
    })
  }

  render() {
    return (
      <Layout className='layout'>
        <Sider className='layout_sider'>
          <Layout>
            <Layout.Header onClick={this.setMenu} className="layout_header">
              <Link to={{pathname:'/home', state: 'home'}}>饥荒云服务器管理中心</Link>
            </Layout.Header>
          </Layout>
          <Menu theme="dark" selectedKeys={this.state.selectedKeys} onClick={this.setMenu}>
            <Menu.Item key='settings' icon={<FormOutlined />}>
              <Link to={{pathname:'/settings', state: 'settings'}}>创建世界</Link>
            </Menu.Item>
            <Menu.Item key='console' icon={<ControlOutlined />}>
              <Link to={{pathname:'/console', state: 'console'}}>控制台</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className='layout_content'>
            <div style={{backgroundColor: "#fff", height: '100%'}}>
              <Redirect to="/home"></Redirect>
              {renderRoutes(this.props.route.routes)}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Layouts)