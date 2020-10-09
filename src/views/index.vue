<template>
  <div class="index-wrap">
    <top>
		<img src="../assets/svg/logo1.svg" slot='logo' />
	</top>
	<img class="backimg" src="@/assets/img/渐变背景01.jpg" />
	<img class="backimgtwo" src="@/assets/img/渐变背景02.png" />
	<!-- <div class="backimgtwo"></div> -->
    <div class="vide-wrap">
	  <div class="font-wrap f-baseY">
		  <p class="title">高效配色神器</p>
		  <p class="font-context">设计助理专为设计师开发的高效配色神器,可一键修改多图层颜色,快速尝试对比色、相邻色等各种配色方案<br />
		  	 支持Windows和Mac,PhotoShop CC2014以上
		  </p>
		  <div class="font-button-wrap f-baseX">
			  <button>观看视频</button>
			  <button>立即下载</button>
			  <!-- <input type="text" v-model="cd" @change="setcd" /> -->
		  </div>
	  </div>
	  <div ref='topcontextWrap' class="topcontext-wrap f-baseY">
		  <video ref="topvideo" :style="{opacity:isopacity}" class="top-video" rel="preload" :src="require('@/assets/video/PhotoshopUI.mp4')" muted loop autoplay playsinline="true"></video>
		  <div ref="block" :style="{opacity:isopacity}" class="block-video">
		    <div ref="blockin" class="block-video-in f-center">
				<video ref='myVideo' id='myVideo' class="top-videoin" rel="preload" :src="require('@/assets/video/中间视频.mp4')" muted loop autoplay playsinline="true"></video>
			</div>
		  </div>
	  </div>
      
    </div>

	<div class="f-baseY w100">
		<div ref='lazyContextWrap' class="lazy-context-wrap">
			<div class="f-center Lottie-wrap">
				<Lottie  class='Lottie' :time='Lottie.LottieA' :animationData='anima.animationDataA' ></Lottie>
				<primLottie  class='Lottie' only='LottieB' :time='Lottie.LottieB' :animationData='anima.animationDataB' ></primLottie>
			</div>
			
			<div class="therr f-baseY">
				<p class="therr-title">换色改色原来如此简单</p>
				<p class="therr-context">当我们还在纠结用什么颜色和什么颜色搭配的时候，达芬奇的核心功能已经在快速尝试各种颜色、各种搭配方案了<br />
				   没错！这就是达芬奇最核心的功能，一键修改多图层颜色！无论字体、形状还是普通或者智能对象图层
				</p>
				<rotation :message='sites1' time="0.5s" backgroundColor='#FFFFFF' hoverTextColor='#235fe7'></rotation>
				<div></div>
			</div>
			
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
import * as animationDataB from '@/assets/anima/3D图层样机1.json'
import rotation from '@/components/Rotation.vue'

export default {
  name: "Home",
  components: {
    videocom,
    top,
	primLottie:()=>import('@/components/Lottietest.vue'),
	Lottie:()=>import('@/components/Lottie.vue'),
	rotation
  },
  data() {
    return {
	  sites1:[
		{svg:'',url:require('@/assets/img/therr/Bento1.png'),index:0},
	    {svg:'',url:require('@/assets/img/therr/Bento2.png'),index:1},
	    {svg:'',url:require('@/assets/img/therr/Bento3.png'),index:2},
	    {svg:'',url:require('@/assets/img/therr/Bento4.png'),index:3}
	  ],
	  videotime:0,
	  dom:{
		  topvideo: null,
		  block: null,
		  blockin: null,
		  lazyContextWrap:null,
		  topcontextWrap:null,
		  myVideo:null,
		  Lottie:null
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
	  },
	  lswidth:null,
	  lsheight:null
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
	  this.lswidth = this.$refs.blockin.offsetWidth
	  this.lsheight = this.$refs.blockin.offsetHeight
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
				// var time = (store.state.setTop-this.lazyContextWrapobj.config[0].intersectionRect.top)/30
				var LottieTime = (store.state.setTop-this.lazyContextWrapobj.config[0].intersectionRect.top)/10
				this.Lottie.LottieA=LottieTime
				this.Lottie.LottieB=LottieTime
				// console.log(LottieTime)
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
				// this.throttle(this.realFunc,100,33.33)
				// var time =(store.state.setTop-this.lazyContextWrapobj.config[0].intersectionRect.top)/1000
				// this.dom.Lottie.currentTime=time
				// console.log(time)
			}
			
			
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
		this.dom.myVideo=this.$refs.myVideo
		this.dom.Lottie=this.$refs.Lottie
	},
	topVideoAnima(){
		var rotateX = store.state.setTop / 10;
		var scalex = 1 + store.state.setTop / 300;
		var scaley = 1 + store.state.setTop / 500;
		var top =300 + store.state.setTop / 10;
		var zindex = store.state.setTop*3
		var myVideoWidth = store.state.setTop*1.2;
		myVideoWidth>1020?myVideoWidth=1020:''
		zindex>99? (zindex=99) : "";
		rotateX > 35 ? (rotateX = 35) : "";
		scalex > 3.97 ? (scalex = 3.97) : "";
		scaley > 2.8 ? (scaley = 2.8) : "";
		top > 350 ? (top = 350) : "";
		this.dom.topcontextWrap.style.zIndex=zindex;
		this.dom.topvideo.style.transform =`perspective(800px)  rotateX(` + rotateX + `deg)`;
		this.dom.block.style.top=top+'px';
		// this.dom.blockin.style.transform ="scale(" + scalex + "," + scaley + ") translateX(-50%)";
		this.dom.blockin.style.width = this.lswidth*scalex+'px'
		this.dom.blockin.style.height = this.lsheight*scaley+'px'
		this.dom.myVideo.style.width= 580+myVideoWidth+'px'
	}
  },
  mounted() {
    //懒加载
    agent_lazy.observe("lazy-context-wrap", (val) => {
		this.$set(this.lazyContextWrapobj,'istrue',!this.lazyContextWrapobj.istrue)
		this.$set(this.lazyContextWrapobj,'config',val)
    });
  },
};
</script>
<style scoped lang="scss">
$myColor: max(50vw, 700px);
.backimg{
	position: fixed;
	width: 100%;
	min-width: 2980px;
	height: auto;
}
.backimgtwo{
	position: fixed;
	// width: 2179.95px;
	width: 100%;
	height: 667.56px;
	z-index: 89;
	top: -200px;
	// background: linear-gradient(#5342ea 0%, #7d50f1 34.48%, #23d9ff 67.21%, #89d0fb 100%);
}
.index-wrap {
  width: 100%;
  height: auto;
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
	font-weight: 600;
	font-size: 52px;
	line-height: 69px;
	letter-spacing: 0.02em;
	color: #fff;
}
.font-context{
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	margin-top: 11px;
	letter-spacing: 0.02em;
	text-align: center;
	color: #fff;
}
.font-button-wrap button{
	width: 150px;
	height: 50px;
	background: transparent;
	border-radius: 30px;
	margin: 28px 20px;
}
.font-button-wrap button:nth-child(1){
	color: #FB1A95;
	background-color: #FFFFFF;
	filter: drop-shadow(0px 12px 38px rgba(136, 91, 159, 0.78));
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
  width: 1200px;
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
    width:auto;
    height:100vh;
    // min-width: 2900px;
    background-position: center 0;
	background-color: #333333;
}

.block-video {
  position: absolute;
  top: 300px;
  width: 1200px;
  height: 800px;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9;
  animation: myfirst 1.5s;
  animation-delay: 0.5s;
}
.block-video-in {
  position: absolute;
  width: 25.5%;
  height: 39.5%;
  left: 49.5%;
  top: 44%;
  transform: translateX(-50%) translateY(-50%);
  transform-origin: 0% 50%;
  background-color: aqua;
  overflow: hidden;
  border-radius: 20px;
}
.top-videoin{
	// width: 700px;
	width: auto;
	height: auto;
}
.lazy-context-wrap {
  position: relative;
  width: 80%;
  height:calc(2800px + 100vh);
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

.Lottie-wrap{
	position: sticky;
	width: 100%;
	height: 100vh;
	top: 0;
}
.Lottie{
	position: absolute;
	width: 1200px;
	height: auto;
}
.Lottie-wrap .Lottie:nth-child(1){
	top: 50px;
}
.Lottie-wrap .Lottie:nth-child(2){
	top: 50px;
}

.therr{
	position: absolute;
	width: 100%;
	height: 100vh;
	padding: 100px 0 0 0;
	top: 2800px;
	z-index: 9;
	background-color: #151515;
}
.therr-title{
	font-weight: 600;
	font-size: 52px;
	line-height: 68px;
	text-align: center;
	color: #fff;
}
.therr-context{
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #fff;
	margin-top: 20px;
}
</style>