import Vue from 'vue'

import vuex, {
  Store
} from 'vuex'

Vue.use(vuex)
// 获取本地 商品 信息
var car= JSON.parse(localStorage.getItem('add')||"[]");

export default new Store({
  state: {
    cont: 1,
    car:car
  },
  getters:{
    add(state){
      var c=0;
      state.car.forEach(item=>{
          c+=item.count
      })
      return c
    }
  },
  mutations: {
    add(state, goodsinfo) {
        var flag=false;
        // 循环购物车 里面的商品对象 获取里面id如果有  数量 加1
        state.car.forEach(item=>{
          if(item.id==goodsinfo.id){
              item.count+=goodsinfo.count;
              flag=true
          }
        })
        if(!flag){
          state.car.push(goodsinfo)
        }
          // 把传过来的商品信息存在本地
        localStorage.setItem('add',JSON.stringify(state.car))
    }
  }
})
