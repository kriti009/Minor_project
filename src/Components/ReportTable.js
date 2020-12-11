import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table} from 'antd';
const { Column} = Table;

const data = [
  {
    Damage_Id: "Damage101",
    Home_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Insurer_Id:"",
    Investigator_Id:"",
    Parts: "Kitchen",
    Amount:"",
    Status:"Damage Noticed"

  },
  {
    Damage_Id: "Damage105",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Garden",
    Amount:"4000",
    Status:"Leak Resolved"
  },
  {
    Damage_Id: "Damage311",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Living Room",
    Amount:"2000",
    Status:"Insurer Approval"
  },{
    Damage_Id: "Damage311",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Living Room",
    Amount:"2000",
    Status:"Insurer Approval"
  },{
    Damage_Id: "Damage311",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Living Room",
    Amount:"2000",
    Status:"Insurer Approval"
  },{
    Damage_Id: "Damage311",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Living Room",
    Amount:"2000",
    Status:"Insurer Approval"
  },{
    Damage_Id: "Damage311",
    Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    Parts: "Living Room",
    Amount:"2000",
    Status:"Insurer Approval"
  },
]
class ReportTable extends React.Component{
  render(){
    return(
      <Table 
        size='small' 
        dataSource={data} 
        scroll={{x:'enable', y:350}}
        pagination={{hideOnSinglePage: true}}
      >
        <Column title="Damage ID" dataIndex="Damage_Id" key="Damage_Id"  />
        <Column title="Home ID" dataIndex="Home_Id" key="Home_Id" />
        <Column title="Insurer ID" dataIndex="Insurer_Id" key="Insurer_Id"/>
        <Column title="Investigator ID" dataIndex="Investigator_Id" key="Investigator_Id" />
        <Column title="Parts" dataIndex="Parts" key="Parts" />
        <Column title="Amount" dataIndex="Amount" key="Amount" />
        <Column title="Status" dataIndex="Status" key="Status" />
      </Table>
    )
  }
}
export default ReportTable;