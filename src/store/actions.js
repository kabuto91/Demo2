import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes';
import axios from 'axios';

export const changeInputValueAction = (value) =>({
    type:CHANGE_INPUT,
    value
})

export const clickBtnAction = () =>({
    type:ADD_ITEM
})

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data) =>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch) =>{
        axios.get('http://rap2api.taobao.org/app/mock/282255/ReactDemo').then((res) =>{
            const data = res.data;
            const action = getListAction(data);
            dispatch(action);
        })
    }
}

export const getMyListAction = () =>({
    type:GET_MY_LIST

})