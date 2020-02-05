import {GET_DATA} from './type'

import {getData} from './action'



describe('action test',()=>{
    it('action',()=>{
        const data=1
        const res=getData(data)
        expect(res).toEqual({type:GET_DATA,data:data})
    })
})