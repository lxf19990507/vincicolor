<template>
<div id='app'>
  <router-view></router-view>
</div>
</template>

<script>
import videocom from "@/components/video.vue";
import agent_lazy from "@/js/lazy1.js";
import {store} from '@/store/store.js'
import top from '@/components/top.vue'
import * as animationDataA from '@/assets/anima/文字.json'
import * as animationDataB from '@/assets/anima/3D图层样机1.json'
import * as animationDataFour from '@/assets/anima/four.json'
import rotation from '@/components/Rotation.vue'
import bottom from '@/components/navbottom.vue'

export default {
  data(){
	  return {
		  
	  }
  },
  mounted() {
	// var docEl = document.documentElement
 //  	var t = window.devicePixelRatio
	// docEl.style.zoom=1/t
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
</style>
