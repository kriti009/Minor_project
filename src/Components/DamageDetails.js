import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import Table from './Table'
import { Steps, Row,Layout } from "antd";
const { Step } = Steps;
const { Content} = Layout;

class DamageDetails extends React.Component{
    render(){
        const style = {
            background: "#111d2c",
            paddingTop: "20px",
            borderRadius: 7,
            minHeight: 75
        };
        return (
            <Content style={{ margin: "24px 16px 0" }}>
                <div
                  style={{ padding: 10, minHeight: 550 }}
                >
                    <Row gutter={[0,7]} style={style}>
                        <Steps size="small" current={2} style={{padding:' 0 5px'}}>
                        <Step  title="Leak Noticed" />
                        <Step title="Investigation" />
                        <Step title="Supplier Check" />
                        <Step title="Approve Request" />
                        <Step title="Insurer Approved" />
                        <Step title="Parts Replaced" />
                        <Step title="Leak Resovled" />
                        </Steps>
                    </Row>
                    <Table></Table>
                </div>
            </Content>
        )
    }
}
export default DamageDetails;