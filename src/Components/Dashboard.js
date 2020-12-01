import React from "react";

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Sidebar from './Sidebar';
import Structure from './Structure';
import Layout from "antd/lib/layout/layout";


class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        
        params.api.sizeColumnsToFit(); 
    };  

    render(){
        var tableStyle = {
            height: '500px', 
            width: '100%',
            margin: '10px'
        };    
        var rowData = 
        [
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
            }
        ]
        
        return(
            // <Sidebar></Sidebar>
            <Structure></Structure>
            // <div className="container l-5 ">
            //     <h3 >Damage Report</h3>
            //     <div className="ag-theme-balham" style={tableStyle} >
            //         <AgGridReact
            //             onGridReady={this.onGridReady}
            //             rowData={rowData}
            //         >
            //             <AgGridColumn field="Damage_Id" resizable= "true" ></AgGridColumn>
            //             <AgGridColumn field="Home_Id"></AgGridColumn>
            //             <AgGridColumn field="Insurer_Id"></AgGridColumn>
            //             <AgGridColumn field="Investigator_Id"></AgGridColumn>
            //             <AgGridColumn field="Parts"></AgGridColumn>
            //             <AgGridColumn field="Amount"></AgGridColumn>
            //             <AgGridColumn field="Status"></AgGridColumn>
            //         </AgGridReact>
            //     </div>
            // </div>
            
        )
    }

    
}

export default Dashboard;