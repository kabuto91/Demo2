import {takeEvery, put} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes';
import axios from 'axios';
import {getListAction} from './actions'
//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    // return (dispatch) =>{
    //     axios.get('http://rap2api.taobao.org/app/mock/282255/ReactDemo').then((res) =>{
    //         const data = res.data;
    //         const action = getListAction(data);
    //         put(action);
    //     })
    // }
    const res = yield axios.get('http://rap2api.taobao.org/app/mock/282255/ReactDemo');
    const action = getListAction(res.data);
    yield put(action);
}

export default mySaga;