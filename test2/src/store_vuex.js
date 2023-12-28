
import { createStore } from "vuex"


const store_vuex = createStore({
  state: {
    user: 10
  },
  getters: {
    tenUser: (state) => {
      return state.user ;
    }
  },
  mutations:{
    tangN(state,n){
      state.user+=n;
    }
  },
   actions:{
    tangN: ({commit})=>{
      commit("tangN");
    }
   },
   modules:{
    
   }
});
export default store_vuex;