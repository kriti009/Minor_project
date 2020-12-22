import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table,Button} from 'antd';
const { Column} = Table;

const data = [
  {
    Damage_Id: "Damage101",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Sink",
    Amount:"",
    Status:"Damage Noticed"

  },
  {
    Damage_Id: "Damage102",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Sprinkler",
    Amount:"",
    Status:"Investigation"

  },
  {
    Damage_Id: "Damage103",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Seepage",
    Amount:"",
    Status:"Damage noticed  "

  },
  {
    Damage_Id: "Damage104",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Water Leakage",
    Amount:"900",
    Status:"Approve Request"
  },
  {
    Damage_Id: "Damage105",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Water choke",
    Amount:"1200",
    Status:"Insurer Approved"

  },
  {
    Damage_Id: "Damage106",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Sprinkler",
    Amount:"800",
    Status:"Parts Replaced"

  },
  {
    Damage_Id: "Damage107",
    Home_Id:"0xFDa61711ceB408a2Bde2a0992Fda133Ae333d3f8",
    Insurer_Id:"0x46d5ab5FB9F039244ed838841B38530e399BC82a",
    Investigator_Id:"0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a",
    ServiceProvider_ID: "0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327",
    Parts: "Sprinkler",
    Amount:"1600",
    Status:"Leak Resolved"
  },
  // {
  //   Damage_Id: "Damage105",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Garden",
  //   Amount:"4000",
  //   Status:"Leak Resolved"
  // },
  // {
  //   Damage_Id: "Damage311",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Living Room",
  //   Amount:"2000",
  //   Status:"Insurer Approval"
  // },{
  //   Damage_Id: "Damage311",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Living Room",
  //   Amount:"2000",
  //   Status:"Insurer Approval"
  // },{
  //   Damage_Id: "Damage311",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Living Room",
  //   Amount:"2000",
  //   Status:"Insurer Approval"
  // },{
  //   Damage_Id: "Damage311",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Living Room",
  //   Amount:"2000",
  //   Status:"Insurer Approval"
  // },{
  //   Damage_Id: "Damage311",
  //   Home_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Insurer_Id:"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  //   Investigator_Id:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  //   Parts: "Living Room",
  //   Amount:"2000",
  //   Status:"Insurer Approval"
  // },
]
class ReportTable extends React.Component{
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
        <Column title="Status" dataIndex="Status" key="Status" fixed="right"/>
        {/* <Column title="Action" dataIndex="action" key="action"
                render={() => (<Button>Approve</Button>)} /> */}
      </Table>
    )
  }
}
export default ReportTable;