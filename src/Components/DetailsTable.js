import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import {Layout, Table,Button, message, Modal, Input, Spin, Alert} from 'antd';
import {getDamageDetails, getCost, web3} from "../ContractFunc";
const { Column} = Table;
const Status = ['Damage_noticed','Investigation', 'supplier_check', 'approval_pending','parts_replacement', 'resolved'];
const Addresses = [
  '0xfda61711ceb408a2bde2a0992fda133ae333d3f8', //home
  '0x1590e7593175440b5638840ff58871c31ad03a6f', //home2
  '0x46d5ab5fb9f039244ed838841b38530e399bc82a', //insurer
  '0xd2befe67c5ce6bdf236f7f6e416519a36de6457a', //investigator
  '0x7b757630ab2f2eb8dd6f05c920a0621910fc5327', //supplier
];


class DetailsTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      damageid: 1,
      data: [],
      userType: "home"
    };
    this.EnterAmount  = this.EnterAmount.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  EnterAmount=()=>{
    message.info('Enter amount here!');
  };
  async handleUpdate(){
    const hide = message.loading('Parts Replaced,Setting Trigger OFF ...Please Wait!!', 0);
    // if(this.state.userType=='home'){
    //   if(this.state.data[0].Status>=5){
    //     const hide = message.loading('Parts Replaced,Setting Trigger OFF ...Please Wait!!', 0);
    //     await 
    //   }
    // }
    setTimeout(hide, 2500);
    // this.props.handleStatusUpdate(1);
  }
  async componentDidMount(){
    let userType = 'home';
    const account = web3.eth.accounts[0];
    if(account==Addresses[0] || account==Addresses[1])
      userType='home';
    if(account==Addresses[2])
      userType='insurer';
    if(account==Addresses[3])
      userType='investigator';
    if(account==Addresses[4])
     userType = 'supplier';
    const damageid = this.props.damageid || this.state.damageid;
    var damage= [];
    const cost= await getCost(damageid);
    await getDamageDetails(damageid).then((res)=>{
      damage.push({
        'Damage_Id': damageid,
        'Home_Id' : res[0],
        'Insurer_Id': res[1],
        'Investigator_Id': res[2],
        'ServiceProvider_ID': res[3],
        'Area': res[4],
        'Parts': res[5],
        'amount': cost,
        'Status': Status[res[6].words[0]]
      });
    });
    this.setState({data:damage,loading:false, userType:userType});
  }
  render(){
    if(this.state.loading){
      return(
          <Layout>
              <Spin tip="Loading...">
                <Alert
                  message="Hang On"
                  description="Fetching Data from Server."
                  type="info"
                />
              </Spin>
          </Layout>
      );
    }
    return(
      <Table 
        size='small' 
        dataSource={this.state.data} 
        scroll={{x:1500,y:350}}
        pagination={{hideOnSinglePage: true}}
      >
        <Column title="Damage ID" dataIndex="Damage_Id" key="Damage_Id"  />
        <Column title="Home ID" dataIndex="Home_Id" key="Home_Id" />
        <Column title="Insurer ID" dataIndex="Insurer_Id" key="Insurer_Id"/>
        <Column title="Investigator ID" dataIndex="Investigator_Id" key="Investigator_Id" />
        <Column title="ServiceProvider_ID" dataIndex="ServiceProvider_ID" key="ServiceProvider_ID" />
        <Column title="Parts" dataIndex="Parts" key="Parts" />
        <Column title="Amount" dataIndex="Amount" key="Amount" />
        <Column title="Status" dataIndex="Status" key="Status" />
        <Column title="Action" dataIndex="action" key="action"
          render={(text, record, index) => (
          <>
          <Button type="primary" onClick={this.handleUpdate}>Approve</Button>
          <Modal
            visible={this.state.visible}
            title="Enter Repair Amount"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.handleOk}
              >
                Update
              </Button>
            ]}
          >
            <Input placeholder="Enter Repair Amount" />
          </Modal>
          </>
          )} />
      </Table>
    )
  }
}
export default DetailsTable;