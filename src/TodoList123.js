import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button, Input, List} from 'antd';
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state =  store.getState();
        this.valueChange = this.valueChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);

    }

    valueChange(e){
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action);
    }

    storeChange(){
        this.setState(store.getState());
    }

    addItem(){
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }

    deleteItem(index){
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action);
    }

    render() { 
        return ( 
            <div>
                <div>
                    <Input 
                        placeholder='Write Something'
                        onChange={this.valueChange}
                        value={this.state.inputValue}
                        style={{width:'250px',margin:'30px'}}
                    />
                    <Button type="primary" onClick={this.addItem}>增加</Button>
                </div>
                <div>
                    <List 
                        dataSource={this.state.list}
                        style={{width:'300px',marginLeft:'30px'}}
                        bordered
                        renderItem={(item, index) =>(
                            <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;