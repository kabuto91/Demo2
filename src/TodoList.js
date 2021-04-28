import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import { changeInputValueAction, clickBtnAction, deleteItemAction, getMyListAction} from './store/actions'
// import axios from 'axios';



class TodoList extends Component {
    constructor(props){
        super(props);
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);
    }

    changeInputValue(e){
        // console.log(e.target.value);
        const action = changeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    storeChange(){
        this.setState(store.getState());
    }

    clickBtn(){
        const action = clickBtnAction();
        store.dispatch(action);
    }

    deleteItem(index){
        // console.log(index);
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount(){
        // const action = getTodoList();
        // store.dispatch(action);
        const action = getMyListAction();
        store.dispatch(action);
    }
    
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }
}
 
export default TodoList;