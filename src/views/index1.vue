<template>
  <div class="index-wrap">
    <top></top>
    <div class="vide-wrap">
	  <div class="font-wrap f-baseY">
		  <h1 class="title">高效配色神器</h1>
		  <p class="font-context">设计助理专为设计师开发的高效配色神器，可一键修改多图层颜色，快速尝试对比色、相邻色等各种配色方案<br />
		  	 支持Windows和Mac，PhotoShop CC2014以上
		  </p>
		  <div class="font-button-wrap f-baseX">
			  <button>观看视频</button>
			  <button>立即下载</button>
		  </div>
	  </div>
	  <div ref='topcontextWrap' class="topcontext-wrap f-baseY">
		  <video ref="topvideo" :style="{opacity:isopacity}" class="top-video" rel="preload" :src="require('@/assets/video/PhotoshopUI.mp4')" muted loop autoplay playsinline="true"></video>
		  <div ref="block" :style="{opacity:isopacity}" class="block-video">
		    <div ref="blockin" class="block-video-in"></div>
		  </div>
	  </div>
      
    </div>

	<div class="f-baseY w100 back-tran">
		<div ref='lazyContextWrap' class="lazy-context-wrap">
			<div class="f-baseY Lottie-wrap"><Lottie  class='Lottie' :time='Lottie.LottieA' :animationData='anima.animationDataA' ></Lottie></div> 
			<div class="f-baseY Lottie-wrap"><Lottie  class='Lottie' :time='Lottie.LottieB' :animationData='anima.animationDataB' ></Lottie></div> 
		</div>
	</div>
    

    <!-- 触发计算属性 -->
    <div v-show="false">{{settop}}{{lazyContextWrap}}</div>
  </div>
</template>

<script>
import videocom from "@/components/video.vue";
import agent_lazy from "@/js/lazy.js";
import {store} from '@/store/store.js'
import top from '@/components/top.vue'
import * as animationDataA from '@/assets/anima/文字.json'
import * as animationDataB from '@/assets/anima/3D图层样机.json'

export default {
  name: "Home",
  components: {
    videocom,
    top,
	Lottie:()=>import('@/components/Lottie.vue')
  },
  data() {
    return {
	  dom:{
		  topvideo: null,
		  block: null,
		  blockin: null,
		  lazyContextWrap:null,
		  topcontextWrap:null
	  },
      isopacity: 0, //控制中间视频的透明度
      lazyContextWrapobj:{
		  istrue:true,
		  count:0,
	  },//lazy-context-wrap dom节点是否划入视图
	  anima:{
		  animationDataA:animationDataA,
		  animationDataB:animationDataB
	  },
	  Lottie:{
		  LottieA:0,
		  LottieB:0
	  }
    };
  },
  created() {
    //视频加载完成一瞬间会卡住整个页面0.5s,此处为配合延迟动画
    setTimeout(() => {
      this.isopacity = 1;
    }, 1200);
    //用于获取相应dom节点实例
    this.$nextTick(() => {
      this.getdom()
    });
  },
  computed: {
    /*
	 监听滚动条
	 */
    settop() {
	  if (store.state.setTop > 3000) return;

      this.$nextTick(() => {
		  this.topVideoAnima()
      });
      return store.state.setTop;
    },
	lazyContextWrap:function(){
		if(this.lazyContextWrapobj.istrue == false ) return;
		
		this.$nextTick(()=>{
			
			if(this.lazyContextWrapobj.hasOwnProperty('config')){
				var addwidth = (store.state.setTop-this.lazyContextWrapobj.config[0].intersectionRect.top)/25 
				var LottieTime = (store.state.setTop-this.lazyContextWrapobj.config[0].intersectionRect.top)/10
				this.Lottie.LottieA=LottieTime
				this.Lottie.LottieB=LottieTime
				if(addwidth>20){
					addwidth=20
					this.lazyContextWrapobj.count++
				}
				// addwidth>20?addwidth=20:''
				addwidth<0?addwidth=0:''
				var Radius=addwidth*2.5
				// this.lazyContextWrapobj.config[0].intersectionRect.top
				this.dom.lazyContextWrap.style.width=80+addwidth+'%'
				this.dom.lazyContextWrap.style.borderTopLeftRadius=50-Radius+'px'
				this.dom.lazyContextWrap.style.borderTopRightRadius=50-Radius+'px'
			}
			// console.log(addwidth)
		})
		
		return store.state.setTop;
	}
  },
  methods: {
    getdom(){
		this.dom.topvideo = this.$refs.topvideo;
		this.dom.block = this.$refs.block;
		this.dom.blockin = this.$refs.blockin;
		this.dom.lazyContextWrap= this.$refs.lazyContextWrap
		this.dom.topcontextWrap= this.$refs.topcontextWrap
	},
	topVideoAnima(){
		var rotateX = store.state.setTop / 10;
		var scalex = 1 + store.state.setTop / 300;
		var scaley = 1 + store.state.setTop / 500;
		var top =300 + store.state.setTop / 10;
		var zindex = store.state.setTop*3
		zindex>99? (zindex=99) : "";
		rotateX > 35 ? (rotateX = 35) : "";
		scalex > 3.97 ? (scalex = 3.97) : "";
		scaley > 2.8 ? (scaley = 2.8) : "";
		top > 320 ? (top = 320) : "";
		this.dom.topcontextWrap.style.zIndex=zindex;
		this.dom.topvideo.style.transform =`perspective(800px)  rotateX(` + rotateX + `deg)`;
		this.dom.block.style.top=top+'px';
		this.dom.blockin.style.transform ="scale(" + scalex + "," + scaley + ") translateX(-50%)";
	}
  },
  mounted() {
    //懒加载
    agent_lazy.observe("lazy-context-wrap", (val) => {
		this.$set(this.lazyContextWrapobj,'istrue',!this.lazyContextWrapobj.istrue)
		this.$set(this.lazyContextWrapobj,'config',val)
    });
    
    //全局状态管理
    // store.commit.change(3)
    // console.log(store.state.screenCars)
    //刷新页面滚动到顶部
   //  setTimeout(() => {
   //    document.documentElement.scrollTop = 0;
	  // window.scrollTo(0,0);
   //  }, 200);
  },
};
</script>
<style scoped lang="scss">
$myColor: max(50vw, 700px);

.back-tran{
	background-color: rgba(255,255,255,0.1);
}

.index-wrap {
  width: 100%;
  height: 5000px;
  // overflow: hidden;
}
.vide-wrap {
  width: 100%;
  height: 200vh;
  background-color: #333333;
}
.font-wrap{
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 98;
}
.title{
	margin-top: 130px;
	color: #FFFFFF;
}
.font-context{
	text-align: center;
	color: #FFFFFF;
}
.font-button-wrap button{
	width: 150px;
	height: 50px;
	background: transparent;
	border-radius: 30px;
	margin: 50px 20px;
}
.font-button-wrap button:nth-child(1){
	color: #FB1A95;
	border: 1px solid #FB1A95;
}
.font-button-wrap button:nth-child(2){
	color: #FFFFFF;
	border: 1px solid #FFFFFF;
}
.topcontext-wrap{
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
}

.top-video {
  position: absolute;
  top: 300px;
  width: 68%;
  max-width: 1000px;
  height: auto;
  animation: myfirst 1.5s;
  animation-delay: 0.5s;
  transform-origin: 50% 100%;
  border-radius: 20px;
}

.floattop-backvideo-wrap{
	position: absolute;
	width: 100%;
	height: 400px;
	top: 0;
	overflow: hidden;
	z-index:89;
	mix-blend-mode: multiply;
	filter: blur(80px);
}

.mobiletestvideos {
  width: 100%;
}

.mobiletestvideosback{
	position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:auto;
    min-width: 2900px;
    background-position: center 0;
}

.block-video {
  position: absolute;
  top: 300px;
  width: 68%;
  max-width: 1000px;
  height: 45vw;
  max-height: 666.66px;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9;
  animation: myfirst 1.5s;
  animation-delay: 1s;
}
.block-video-in {
  position: absolute;
  width: 25.5%;
  height: 39.5%;
  left: 49.5%;
  top: 24%;
  transform: translateX(-50%);
  transform-origin: 0% 50%;
  background-color: aqua;
  // border-radius: 20px;
}
.lazy-context-wrap {
  position: relative;
  width: 80%;
  height: 3000px;
  background-color: #FFFFFF;
  z-index: 101;
  border-top-left-radius: 50px; 
  border-top-right-radius: 50px;
}
@keyframes myfirst {
  0% {
    opacity: 0;
    transform: perspective(800px) scale(3, 3) rotateX(30deg);
  }
  100% {
    opacity: 1;
    transform: perspective(800px) scale(1, 1) rotateX(0deg);
  }
}

//
.Lottie-wrap{
	position: sticky;
	top: 100px;
}
.Lottie{
	position: absolute;
	width: 50%;
	max-width: 800px;
	height: auto;
}
</style>