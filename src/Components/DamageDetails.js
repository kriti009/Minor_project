import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import DetailsTable from './DetailsTable'
import { Steps, Row,Col,Layout,Table } from "antd";
import {getStatus} from "../ContractFunc"
const { Step } = Steps;
const { Content} = Layout;

class DamageDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            damageid: this.props.location.state.damageid || 0,
            status: 0,
        }
        this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
    }
    handleStatusUpdate=(status)=>{
        this.setState({status:status});
    }
    async componentDidMount(){
        // console.log(this.props.location.state.damageid);
        const status = await getStatus(this.state.damageid);
        this.setState({status:status.words[0]});
    }
    render(){
        const style = {background: "#111d2c",paddingTop: "20px",borderRadius: 7,minHeight: 75};
        const style2 = {background: "#111d2c",marginTop: "20px",borderRadius: 6,};
        return (
            <Content style={{ margin: "24px 16px 0" }}>
                <div
                  style={{ padding: 10, minHeight: 550 }}
                >
                    <Row gutter={[0,7]} style={style}>
                        <Steps size="small" current={this.state.status} style={{padding:' 0 5px'}}>
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
                        <Col><DetailsTable damageid={this.state.damageid} handleStatusUpdate={this.handleStatusUpdate}/></Col>
                    </Row>
                </div>
            </Content>
        )
    }
}
export default DamageDetails;