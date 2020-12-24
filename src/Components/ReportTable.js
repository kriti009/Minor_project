import React from "react";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import ReactDOM from "react-dom";
import {getDamageDetails} from "../ContractFunc";
import "antd/dist/antd.css";
import "./index.css";
import { Table,Button} from 'antd';
const { Column} = Table;
const Status = ['Damage_noticed','Investigation', 'supplier_check', 'approval_pending','parts_replacement', 'resolved'];

class ReportTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      redirect: null
    };
    this.handleOnCLick = this.handleOnCLick.bind(this);
  }
  handleOnCLick = () =>{
    this.setState({redirect:'/details'});
  }
	async componentDidMount() {
    var damages=[];
    for(var i=0;i<this.props.data.length;i++){
      var damageid = this.props.data[i];
      await getDamageDetails(this.props.data[i]).then((res)=>{
        // console.log(res);
        damages.push({
          'Damage_Id': damageid,
          'Home_Id' : res[0],
          'Insurer_Id': res[1],
          'Investigator_Id': res[2],
          'ServiceProvider_ID': res[3],
          'Area': res[4],
          'Parts': res[5],
          'Status': Status[res[6].words[0]]
        });
      });
    }
    console.log(damages);
    this.setState({data:damages});
  }
  
  render(){
    if (this.state.redirect) {
      return <Redirect push to={{pathname: this.state.redirect, state:{damageid:'5'}}} />
    }
    // console.log(this.state.data);
    return(
      <Table 
        size='small' 
        dataSource={this.state.data} 
        scroll={{x:1500,y:350}}
        pagination={{hideOnSinglePage: true}}
      >
        <Column title="Damage ID" dataIndex="Damage_Id" key="Damage_Id" width='7%' />
        <Column title="Home ID" dataIndex="Home_Id" key="Home_Id" />
        <Column title="Insurer ID" dataIndex="Insurer_Id" key="Insurer_Id"/>
        <Column title="Investigator ID" dataIndex="Investigator_Id" key="Investigator_Id" />
        <Column title="ServiceProvider_ID" dataIndex="ServiceProvider_ID" key="ServiceProvider_ID" />
        <Column title="Parts" dataIndex="Parts" key="Parts" width='7%'/>
        <Column title="Amount" dataIndex="Amount" key="Amount" width='7%' />
        <Column title="Status" dataIndex="Status" key="Status" fixed="right" width='8%'/>
        {/* <Column title="Action" dataIndex="action" key="action"
                render={() => (<Button>Approve</Button>)} /> */}
        <Column title="Action" dataIndex="action" key="action" fixed='right' width='5%'
                render={() => (<Button type='primary' onClick={this.handleOnCLick}>View</Button>)} /> 
      </Table>
    )
  }
}
export default ReportTable;