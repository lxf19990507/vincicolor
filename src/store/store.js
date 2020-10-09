import Vue from 'vue'
export const store = Vue.observable({
  state:{
    screenCars:1,
    setTop:0
  },
  commit:{
    change:function(val){
        store.state.screenCars=val
    }
  }
})