<template>
    <div>
        <lottie :options="defaultOptions" :autoplay="true" v-on:animCreated="handleAnimation"/>
		<div v-show="false">{{animatime}}</div>
    </div>
</template>

<script>

  import Lottie from 'vue-lottie';
  // import * as animationData from '@/assets/anima/文字.json'

  export default {
    props:{
      pauseIstrue:{
        type:null,
        default:false
      },
	  animationData:null,
	  time:{
		  type:Number,
		  default:0
	  }
    },
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions:{animationData: this.animationData.default},
        animationSpeed: 1,
        // time:null,
        istrue:false
      }
    },
	computed:{
		animatime(){
			this.$nextTick(()=>{
				this.seta(this.time)
			})
			return this.time
		}
	},
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      stop: function () {
        this.anim.stop();
      },

      play: function () {
        this.anim.play();
      },

      pause: function () {
        this.anim.pause();
      },
      seta: function (num) {
        this.anim.goToAndStop(num,true)
      },
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      },
      init: function() {
          this.anim.renderer='svg', // 渲染出来的是什么格式
          this.anim.autoplay=false // 自动播放
      },
      plays: function(){
        this.anim.autoplay=true // 自动播放
      },
	  goToAndPlay(val){
		  this.anim.goToAndStop(num,true)
	  }
    },
    mounted() {
		this.play()
      // this.pause()
    }
  }
</script>
<style scoped>
  .wrapin{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
  }
</style>
