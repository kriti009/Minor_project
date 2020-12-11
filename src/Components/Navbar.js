import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout,Input,Menu} from "antd";
import {
  UserOutlined,
  SettingOutlined
} from "@ant-design/icons";
const { Header} = Layout;
const {Search} = Input;
const {SubMenu} = Menu;
class Navbar  extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Header className="header">
        <span style={{color:'rgba(255, 255, 255, 0.6)', fontSize:'120%', fontWeight:'100%'}}>{this.props.data}</span>
        <Menu theme="dark" mode="horizontal"  style={{float: 'right'}}>
          
          <Menu.Item key='1' >
            <Search placeholder="Search Damage ID.." style={{ width: 200, padding: '15px 0 0 0'}} />
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined/>}>
          </Menu.Item>
          <SubMenu icon={<SettingOutlined />}>
            <Menu.Item key='setting1'>
              SETTINGS
            </Menu.Item>
            <Menu.Item key='setting2'>
              NOTIFICATION
            </Menu.Item>
            <Menu.Item key='setting3'>
              LOGOUT
            </Menu.Item>
          </SubMenu>
        </Menu>        
      </Header>
    )
  } 
};
export default Navbar;

