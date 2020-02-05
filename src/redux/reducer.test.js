import {GET_DATA,RECEVIED} from './type'
import reducer from './reducer'


describe('reducer ',()=>{
    it('Getdata test',()=>{
         const state={lodding:false,data:""}
         const data=1
         const res=reducer(state,{type:GET_DATA,data:data})
         expect(res.lodding).toBeTruthy()
    })
    it('Getdata test',()=>{
        const state={lodding:false,data:""}
        const data="sssss"
        const res=reducer(state,{type:RECEVIED,data:data})
        expect(res.lodding).toBeFalsy()
   })
   it('Getdata test',()=>{
    const state={lodding:false,data:""}
    const data="sssss"
    const res=reducer(state,{type:RECEVIED,data:data})
    
    expect(res.data).toBe(data)
})
})