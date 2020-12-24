import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import DetailsTable from './DetailsTable'
import { Steps, Row,Col,Layout,Table } from "antd";
const { Step } = Steps;
const { Content} = Layout;
// const {Col} = Table;

class DamageDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.location.state.damageid);
        // console.log(this.props.location.state);
        const style = {
            background: "#111d2c",
            paddingTop: "20px",
            borderRadius: 7,
            minHeight: 75
        };
        const style2 = {
            background: "#111d2c",
            // padding: "8px 0 0 0",
            marginTop: "20px",
            borderRadius: 6,
            // minHeight: 400
          };
        return (
            <Content style={{ margin: "24px 16px 0" }}>
                <div
                  style={{ padding: 10, minHeight: 550 }}
                >
                    <Row gutter={[0,7]} style={style}>
                        <Steps size="small" current={7} style={{padding:' 0 5px'}}>
                        <Step  title="Damage Noticed" />
                        <Step title="Investigation" />
                        <Step title="Supplier Check" />
                        <Step title="Approve Request" />
                        <Step title="Insurer Approved" />
                        <Step title="Parts Replaced" />
                        <Step title="Damage Resovled" />
                        </Steps>
                    </Row>
                    <Row style={style2} gutter={[0,7]}>
                        <Col style={{color: '#bfbfbf', padding:'10px'}} >Damage Report</Col>
                        <Col><DetailsTable /></Col>
                    </Row>
                    
                </div>
            </Content>
        )
    }
}
export default DamageDetails;