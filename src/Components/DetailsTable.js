import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import {Layout, Table,Button, message, Modal, Input, Spin, Alert,Form,} from 'antd';
import {statusUpdateInsur,passDamagetoInsurer, addCost, passDamagetoSupp,passDamagetoInves,getDamageDetails, getCost, web3, getStatus} from "../ContractFunc";
const { Column} = Table;
const Status = ['Damage_noticed','Investigation', 'supplier_check', 'approval_pending','parts_replacement', 'Damage resolved'];
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
    this.handleOk =this.handleOk.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  async handleOk (e){
    var status = await getStatus(this.state.damageid);
    status = status.words[0];
    this.setState({ loading: true });
    console.log(e.Amount);
    addCost(e.Amount, this.state.damageid).then(()=>{
      this.props.handleStatusUpdate(status+1); 
      passDamagetoInsurer(this.state.damageid);
    })
    
    setTimeout(() => {
      var damage= [];
      getCost(this.state.damageid).then((cost)=>{
        getDamageDetails(this.state.damageid).then((res)=>{
          damage.push({
            'Damage_Id': this.state.damageid,
            'Home_Id' : res[0],
            'Insurer_Id': res[1],
            'Investigator_Id': res[2],
            'ServiceProvider_ID': res[3],
            'Area': res[4],
            'Parts': res[5],
            'Amount': cost,
            'Status': Status[res[6].words[0]]
          });
        });
      });
      setTimeout(()=>{
        this.setState({data:damage, loading: false, visible: false });
        console.log('done');
      },3000);
      
    }, 30000);
   
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  EnterAmount=()=>{
    message.info('Enter amount here!');
  };
  async handleUpdate(){
    var status = await getStatus(this.state.damageid);
    
    status = status.words[0];
    console.log(status);
    var damage  =this.state.data;
          damage.Status = Status[status+1];
          this.setState({data:damage});
    // const hide = message.loading('Parts Replaced,Setting Trigger OFF ...Please Wait!!', 0);
    if(this.state.userType=='home'){
      if(this.state.data[0].Status=="Damage resolved"){
        const hide = message.loading('Parts Replaced,Setting Trigger OFF ...Please Wait!!', 0);
        setTimeout(hide, 2500);
        this.props.handleStatusUpdate(status+1);
      }else{
        message.info('Damage not Resolved Yet');
      }
    }
    if(this.state.userType =='insurer'){
      if(this.state.data[0].Status=='Damage_noticed'){
        this.setState({ loading: true });
        await passDamagetoInves(this.state.damageid).then(()=>{
          this.props.handleStatusUpdate(status+1); 
        })
        const hide = message.loading('Passing Damage to Investigator ...Please Wait!!', 0);
        setTimeout(hide, 250);
        setTimeout(() => {
          var damage= [];
          getCost(this.state.damageid).then((cost)=>{
            getDamageDetails(this.state.damageid).then((res)=>{
              damage.push({
                'Damage_Id': this.state.damageid,
                'Home_Id' : res[0],
                'Insurer_Id': res[1],
                'Investigator_Id': res[2],
                'ServiceProvider_ID': res[3],
                'Area': res[4],
                'Parts': res[5],
                'Amount': cost,
                'Status': Status[res[6].words[0]]
              });
            });
          });
          setTimeout(()=>{
            this.setState({data:damage, loading: false, visible: false });
            console.log('done');
          },3000);
        }, 6000);
      }else if(this.state.data[0].Status=='approval_pending' || this.state.data[0].Status=='parts_replacement'){
          this.setState({ loading: true });
          await statusUpdateInsur(this.state.damageid).then(()=>{
            this.props.handleStatusUpdate(status+1); 
          })
          const hide = message.loading('Approving Request ...Please Wait!!', 0);
          setTimeout(hide, 250);
          setTimeout(() => {
            var damage= [];
            getCost(this.state.damageid).then((cost)=>{
              getDamageDetails(this.state.damageid).then((res)=>{
                damage.push({
                  'Damage_Id': this.state.damageid,
                  'Home_Id' : res[0],
                  'Insurer_Id': res[1],
                  'Investigator_Id': res[2],
                  'ServiceProvider_ID': res[3],
                  'Area': res[4],
                  'Parts': res[5],
                  'Amount': cost,
                  'Status': Status[res[6].words[0]]
                });
              });
            });
            setTimeout(()=>{
              this.setState({data:damage, loading: false, visible: false });
              console.log('done');
            },3000);
          }, 6000);
          
      }else message.info('Wait for supplier to enter repair amount');
    }
    if(this.state.userType =='investigator'){
      if(this.state.data[0].Status=='Investigation'){
        this.setState({ loading: true });
        await passDamagetoSupp(this.state.damageid).then(()=>{
          this.props.handleStatusUpdate(status+1); 
        })
        const hide = message.loading('Investigation Done, Passing Damage to Supplier ...Please Wait!!', 0);
        setTimeout(hide, 2500);
        setTimeout(() => {
          var damage= [];
          getCost(this.state.damageid).then((cost)=>{
            getDamageDetails(this.state.damageid).then((res)=>{
              damage.push({
                'Damage_Id': this.state.damageid,
                'Home_Id' : res[0],
                'Insurer_Id': res[1],
                'Investigator_Id': res[2],
                'ServiceProvider_ID': res[3],
                'Area': res[4],
                'Parts': res[5],
                'Amount': cost,
                'Status': Status[res[6].words[0]]
              });
            });
          });
          setTimeout(()=>{
            this.setState({data:damage, loading: false, visible: false });
            console.log('done');
          },3000);
        }, 6000);
      }else message.info('wait for insurer');
    }
    if(this.state.userType == 'supplier'){
      if(this.state.data[0].Status=='supplier_check')
        this.showModal();
      else message.info('Wait for Insurer Approval');
    }
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
        'Amount': cost,
        'Status': Status[res[6].words[0]]
      });
    });
    this.setState({damageid: damageid,data:damage,loading:false, userType:userType});
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
            footer = {null}
          >
            <Form
              name='basic'
              onFinish={this.handleOk}
              onFinishFailed={this.handleCancel}
            >
              <Form.Item
                name='Amount'
                rules={[{ 
                  required: true,
                  message: "Please input amount!"
                }]}
              >
                <Input/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{float:'right'}}>Update</Button>
              </Form.Item>
            </Form>
          </Modal>
          </>
          )} />
      </Table>
    )
  }
}
export default DetailsTable;