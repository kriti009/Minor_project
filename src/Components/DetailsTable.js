import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table,Button, message, Modal, Input} from 'antd';
const { Column} = Table;

const data = [
  {
    Damage_Id: "Damage104",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Water Leakage",
    Amount:"900",
    Status:"Damage Resolved"
  },
]
class DetailsTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      visible: false
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
  render(){
    return(
      <Table 
        size='small' 
        dataSource={data} 
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
                {/* <Button type="primary" onClick={this.handleUpdate}>Resolved</Button> */}
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