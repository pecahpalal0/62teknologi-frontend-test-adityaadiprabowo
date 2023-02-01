import React,{ Component } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';

class Table extends Component{
    columns = ['ID','Name','Price','Ratings','Phone'];
    options = {
        filter: true,
        filterType: "dropdown",
        print: false,
        viewColumns: true,
        selectableRows: 'none',
        onRowClick: (rowData) => {
            console.log("RowClicked->", rowData);
        },
        responsive: "stacked",
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true,
        },
    };

    constructor(){
        super();
        this.state = {obj: []};
    } 

    getData = () => {
        const url = 'http://localhost:8000/api/data';
        axios.get(url).then((ress) => {
            console.log(ress);
            const newObj = [];
            var result = ress.data;
            result['response'].forEach(res => {
                newObj.push({"ID":res.id,
                "Name":res.name,
                "Price":res.price,
                "Rating":res.rating,
                "Phone":res.display_phone})
            });
            return newObj;
        }).then((o) => this.setState({ obj: o }))
    }

    componentDidMount()
    {
        this.getData();
    }

    render(){
        return this.state.obj ? (
            <MUIDataTable
              title={"Data Restaurant"}
              columns={this.columns}
              data={this.state.obj}
              options={this.options}
            />
          ) : (
            <div>Loading...</div>
          );
    }  
}

export default Table;