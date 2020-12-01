import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class Sidebar extends Component {
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }} >
                <h2>dashbpard</h2>
            </Layout>
        )
    }
}
export default Sidebar;