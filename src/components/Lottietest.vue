<template>
    <div>
		<div id="lottie" :ref='only'></div>
		<div v-show="false">{{animatime}}</div>
	</div>
</template>

<script>
  import * as test from './lottie.js'
  export default {
    props:{
	  animationData:null,
	  time:{
	  		  type:Number,
	  		  default:0
	  },
	  only:null
    },
    name: 'app',
    data() {
      return {
		  anim:null
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
		  var params={
			container: this.$refs[this.only], //document.getElementById('lottie'),
			renderer: 'html',
			loop: true,
			autoplay: true,
			animationData: this.animationData.default
		  }
		this.anim = lottie.loadAnimation(params);
    }
  }
</script>
<style scoped>
  #lottie{
	  /* background-color: #FFFFFF; */
	  width:1200px;
	  height:100vh;
	  display:block;
	  overflow: hidden;
	  transform: translate3d(0,0,0);
	  text-align: center;
	  opacity: 1;
  }
</style>
