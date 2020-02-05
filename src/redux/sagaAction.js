import { put, takeLatest} from 'redux-saga/effects';
import {RECEVIED,GET_DATA} from './type'

function* fetchData(){
    const res= yield fetch("http://localhost:4000/").then((data)=>{
        
        return data.json()
    }).catch(()=>{
        return {data:"OOPS !!!!!!!!!!! Server is down   "}
    })
    
    yield put  ({type:RECEVIED,data:res.data})
        
}   
function* getDataStart(){
    yield takeLatest('GET_DATA',fetchData)
}

export default function* rootsaga(){
    yield getDataStart()
}