import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  SignalFilled,
  ToolFilled,
  CheckCircleFilled
} from "@ant-design/icons";

import Navbar from "./Navbar";
// import Context from "./Context";

const {Sider } = Layout;

// ReactDOM.render(
class Index extends React.Component{
  render(){
    return(
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.selected]}>
            <Menu.Item key="1" icon={<SignalFilled />}>
              DASHBOARD
            </Menu.Item>
            <Menu.Item key="2" icon={<ToolFilled/>}>
              REPAIRS
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckCircleFilled />}>
              COMPLETED REPAIRS
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Navbar data={this.props.title}></Navbar>
          {this.props.children}
        </Layout>
      </Layout>
    )
  }
};
export default Index;

