import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout,Row, Loader} from "antd";
import { getDamagesSupplier, getDamagesInvestigator, getDamagesInsurer, getHome ,web3, addDamage,addHome} from "../ContractFunc";
import CountDamageCol from './commonComponents/CountDamageCol';
import Table from './Table'
const { Content} = Layout;
const Addresses = [
  '0xfda61711ceb408a2bde2a0992fda133ae333d3f8', //home
  '0x1590e7593175440b5638840ff58871c31ad03a6f', //home2
  '0x46d5ab5fb9f039244ed838841b38530e399bc82a', //insurer
  '0xd2befe67c5ce6bdf236f7f6e416519a36de6457a', //investigator
  '0x7b757630ab2f2eb8dd6f05c920a0621910fc5327', //supplier
];


class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      damagesArr: [],
      loading:true
    }
  }
  async componentDidMount() {
    // await addDamage('0x46d5ab5FB9F039244ed838841B38530e399BC82a','0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a','0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327','kitchen','Tap');
      var home;
      const account = web3.eth.accounts[0];
      var damages;
      if(account == Addresses[0] || account==Addresses[1]){
        
        console.log('handle home');
        home = await getHome();
        console.log(home);
        damages = home[4].map((obj)=>{return obj.words[0]});
        this.setState({count: home[4].length, loading:false, damagesArr:damages});
      }
        
      if(account == Addresses[2]){
        console.log('handle insurer');
        var temp  = await getDamagesInsurer();
        console.log(temp);
        damages = temp.map((obj)=>{return obj.words[0]});
        this.setState({count: temp.length, loading:false, damagesArr:damages});
      }

      if(account == Addresses[3]){
        console.log('handle investigator');
        var temp  = await getDamagesInvestigator();
        console.log(temp);
        damages = temp.map((obj)=>{return obj.words[0]});
        this.setState({count: temp.length, loading:false, damagesArr:damages});
      }

      if(account == Addresses[4]){
        console.log('handle Suppiler');
        var temp  = await getDamagesSupplier();
        console.log(temp);
        damages = temp.map((obj)=>{return obj.words[0]});
        this.setState({count: temp.length, loading:false, damagesArr:damages});
      }
      
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
      <Content style={{ margin: "24px 16px 0"}}>
        <div
          // className="site-layout-background"
          style={{ padding: 10, minHeight: 550 }}
        >
        <Row gutter={16} >
          <CountDamageCol data={'Total Damage'} count={this.state.count} />
          <CountDamageCol data={'Repairs'} count={this.state.count} />
          <CountDamageCol data={'Completed Repairs'} count={'0'} icon={'LikeOutlined'}/>
        </Row>
        <Table data={this.state.damagesArr}/>
        </div>
      </Content>
    )
  }
}
export default Dashboard;