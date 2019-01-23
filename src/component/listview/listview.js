import React, {Component} from 'react';
import {
    Text, ListView
} from 'react-native';

export default class Demo extends Comment {
    constructor(props){
        super(props);
        this.ds = ListView.DataSource({rowHasChanged: (r1,r2)=>r1 != r2});
        this.state = {
            dataSource:  ds.cloneWithRows([{ten: 'row1'}, {ten:  'row2'}])
        }
    }

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource} 
                renderRow= {
                    (rowData)=> {
                        return (
                            <Text>{rowData.ten}</Text>
                        );
                    }
                }
            />
        );
    }
}