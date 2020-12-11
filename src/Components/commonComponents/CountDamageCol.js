import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Row,Col} from "antd";
import {
  ToolOutlined ,
}from "@ant-design/icons";

class CountDamageCol extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const style = {background:'#111d2c', padding: '8px 0 0 0',borderRadius:7, minHeight:75 };
    const iconStyle = {color:'#bfbfbf', fontSize:40,textAlignment:'center'};
    return (
      <Col className="gutter-row" span={8}>
        <Row gutter={8} style={style} justify="start">
          <Col className="gutter-row" span={12} align='center' pull={1}>
            <ToolOutlined style={iconStyle}/>
          </Col>
          <Col className="gutter-row" span={12} align='end' pull={1} style={{color: '#bfbfbf'}}>
            {this.props.data}<br/>{this.props.count}
          </Col>
        </Row>
    </Col>
    )
  }
}
export default CountDamageCol