import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout,Row, Loader} from "antd";
import { getHome } from "../ContractFunc";
import CountDamageCol from './commonComponents/CountDamageCol';
import Table from './Table'
const { Content} = Layout;


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
      const home = await getHome();
      console.log(home);
      var damages = home[4].map((obj)=>{return obj.words[0]});
      this.setState({count: home[4].length, loading:false, damagesArr:damages});
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