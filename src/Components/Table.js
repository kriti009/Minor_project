import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import ReportTable from "./ReportTable";
import { Row, Col } from 'antd';


class Table extends React.Component {
  render() {
    const style = {
      background: "#111d2c",
      // padding: "8px 0 0 0",
      marginTop: "20px",
      borderRadius: 6,
      // minHeight: 400
    };
    return (
      <Row style={style} gutter={[0,7]}>
        <Col style={{color: '#bfbfbf', padding:'10px'}} >Damage Report</Col>
        <Col><ReportTable /></Col>
      </Row>
    );
  }
}
export default Table;
