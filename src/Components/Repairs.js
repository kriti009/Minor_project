import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout,Row} from "antd";

import CountDamageCol from './commonComponents/CountDamageCol';
import Table from './Table'
const { Content} = Layout;

class Repairs extends React.Component{
  render(){
    return(
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          // className="site-layout-background"
          style={{ padding: 10, minHeight: 550 }}
        >
        {/* <Row gutter={16} >
          <CountDamageCol data={'Total Damage'} count={'5'} />
          <CountDamageCol data={'Repairs'} count={'4'} />
          <CountDamageCol data={'Completed Repairs'} count={'10'} icon={'LikeOutlined'}/>
        </Row>
        <Table/> */}
        </div>
      </Content>
    )
  }
}
export default Repairs;