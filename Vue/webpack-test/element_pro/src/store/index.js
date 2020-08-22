import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
 const store =new Vuex.Store({
   state:{
     name:1212,
   },
   mutations:{
     upName:function(state,{value}){
       state.name=value
     }
   }
 })
export default store
