import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import {store} from '@/store/store.js'
import './assets/css/base.css'
import './assets/css/public.css'

Vue.config.productionTip = false

new Vue({
  router,
//   store,
  mounted() {
	function ScollPostion() {
	    var t;
	    if(document.documentElement && document.documentElement.scrollTop) {
	        t = document.documentElement.scrollTop;
	    } else if(document.body) {
	        t = document.body.scrollTop;
	    }
	    return {
	        top: t
	    };
	}
	
	window.addEventListener('beforeunload',()=>{
		window.scrollTo(0,0);
	})
	
  	function throttle(func, wait, mustRun) {
  	    var timeout,
  	        startTime = new Date();
  	    return function() {
  	        var context = this,
  	            args = arguments,
  	            curTime = new Date();
  	
  	        clearTimeout(timeout);
  	        // 如果达到了规定的触发时间间隔，触发 handler
  	        if(curTime - startTime >= mustRun){
  	            func.apply(context,args);
  	            startTime = curTime;
  	        // 没达到触发间隔，重新设定定时器
  	        }else{
  	            timeout = setTimeout(func, wait);
  	        }
  	    };
  	};
  	// 实际想绑定在 scroll 事件上的 handler
  	function realFunc(){
		  // if(store.state.setTop>3000)return
		  
  	      store.state.setTop=ScollPostion().top
  	}
  	// 采用了节流函数
  	window.addEventListener('scroll',realFunc);
  	// store.state.setTop=ScollPostion().top
  },
  render: h => h(App)
}).$mount('#app')
