import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {Layout, Table,Button, message, Modal, Input} from 'antd';
import {getDamageDetails, getCost} from "../ContractFunc";
const { Column} = Table;
const Status = ['Damage_noticed','Investigation', 'supplier_check', 'approval_pending','parts_replacement', 'resolved'];


class DetailsTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: []
    };
    this.EnterAmount  = this.EnterAmount.bind(this);
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
  }
  handleUpdate=()=>{
    const hide = message.loading('Parts Replaced,Setting Trigger OFF ...Please Wait!!', 0);
    setTimeout(hide, 2500);
  }
  async componentDidMount(){
    const damageid = 1;
    var damage= [];
    const cost= await getCost(damageid);
    await getDamageDetails(damageid).then((res)=>{
      // console.log(res);
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
    console.log(damage);
    this.setState({data:damage,loading:false});
  }
  render(){
    if(this.state.loading){
      return(
          <Layout>
              {/* <Dimmer active inverted>
                  <Loader size='massive'>Hang On...</Loader>
              </Dimmer> */}
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
                render={() => (
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