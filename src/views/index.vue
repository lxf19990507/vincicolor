<template>
  <div class="index-wrap">
    <top>
		<img src="../assets/img/topnav/logo2.png" slot='logo' />
	</top>
	
    <div class="vide-wrap">
	  <img class="backimg" src="@/assets/img/渐变背景01.jpg" />
	  
	  <div class="font-wrap f-baseY">
		  <img class="backimgtwo" src="@/assets/img/渐变背景02.png" />
		  <div style="z-index:90;" class="f-baseY" >
			  <p class="title">高效配色神器</p>
			  <p class="font-context">设计助理专为设计师开发的高效配色神器,可一键修改多图层颜色,快速尝试对比色、相邻色等各种配色方案<br />
				 支持Windows和Mac,PhotoShop CC2014以上
			  </p>
			  <div class="font-button-wrap f-baseX">
				  <button>观看视频</button>
				  <button>立即下载</button>
				  
			  </div>
		  </div>
	  <!-- </div> -->
		  <div ref='topcontextWrap' class="topcontext-wrap f-baseY">
			  <video ref="topvideo" :style="{opacity:isopacity}" class="top-video" rel="preload" :src="require('@/assets/video/topvideo1.mp4')" muted loop autoplay playsinline="true"></video>
			  <div ref="block" :style="{opacity:isopacity}" class="block-video">
				<div ref="blockin" class="block-video-in f-center">
					<video ref='myVideo' id='myVideo' class="top-videoin" rel="preload" :src="require('@/assets/video/中间视频.mp4')" muted loop autoplay playsinline="true"></video>
				</div>
			  </div>
		  </div>
      </div>
    </div>

	<div ref='lazyContextWrap' class="lazy-context-wrap">
		<div class="f-center Lottie-wrap">
			<Lottie  class='Lottie' :time='Lottie.LottieA' :animationData='anima.animationDataA' ></Lottie>
			<primLottie  class='Lottie' only='LottieB' :time='Lottie.LottieB' :animationData='anima.animationDataB' ></primLottie>
		</div>
	</div>
    
	<div class="therrWrap">
	<div class="therr f-baseY">
		<div ref='therrstick' :style="{top:therrtop+'px'}" class="therr-stick f-baseY"><!--  -->
			<p class="therr-title">换色改色原来如此简单</p>
			<p class="therr-context">当我们还在纠结用什么颜色和什么颜色搭配的时候，达芬奇的核心功能已经在快速尝试各种颜色、各种搭配方案了<br />
			   没错！这就是达芬奇最核心的功能，一键修改多图层颜色！无论字体、形状还是普通或者智能对象图层
			</p>
			<div class="therr-video">
				<div class="lazy-therr-video-one">
					<video ref='therrVideoOne' :src="require('@/assets/video/therr/换色改色原来如此简单.mp4')" muted loop ></video><!-- autoplay playsinline="true" -->
				</div>
			</div>
			<div class="therr-rotation-wrap">
			    <rotation :style="{visibility:therrRotation.istrue?'visible':'hidden'}" class="therr-rotation" :message='sites1' time="0.5s" backgroundColor='#EAEAEA' ></rotation>
			</div>
			<div class="therr-words-wrap f-center f-arrayY">
				<div class="therr-words f-alignNone">
					<div>
						<p class="currencyTitle">在线配色库<br />1000+流行配色<br />简单快速应用</p>
						<p class="currencyContext mt20">插件内置在线配色库，1000+流行配色，持续更新<br />
							来源于网络当下流行的颜色搭配<br />
							可快速选择喜欢的色彩方案右键一键应用到你的设计稿上
						</p>
						<button class="therr-words-button">查看网站</button>
					</div>
					<div class="therr-words-video">
						<div class="lazy-therr-video-two">
							<video ref='therrVideoTwo' class="ml60" :src="require('@/assets/video/therr/在线配色库 - Video.mp4')" muted loop ></video>
						</div>
					</div>
				</div>
				
				<div class="therr-words f-alignNone">
					<div class="therr-words-video">
						<div class="lazy-therr-video-therr">
							<video ref='therrVideoTherr' class="mr60"  :src="require('@/assets/video/therr/美学配色方案 - Video.mp4')" muted loop ></video>
						</div>
					</div>
					<div>
						<p class="currencyTitle currency-right">选取一个主色<br />马上生成<br />美学配色方案 </p>
						<p class="currencyContext currency-right mt20">当你决定一个主色后，还在头疼不知道如何配色的时候<br />
							可以点击方案，快速生成邻近色、互补色、类似色等各种方案
						</p>
						<img style="margin-top: 60px;" src="../assets/img/therr/方案ICON2.png" />
					</div>
				</div>

			</div>
			
		</div>
		<div style="width: 100%;height: calc(100vh + 160px);background-color: #FFFFFF; "></div>
	</div>
	</div>
	
	<div class="four-wrap">
		<div class="four-context f-baseY">
			<div class="lazy-animationDataFour">
				<Lottie ref='animationDataFour' class='animationDataFour' :time='Lottie.animationDataFour' :animationData='anima.animationDataFour'></Lottie>
			</div>
		</div>
		<div style="width: 100%;height: 100vh;"></div>
	</div>
	
	<div class="five-wrap f-arrayY f-center">
		<div class="five-wrap-one f-alignNone">
			<div></div>
			<div></div>
		</div>
		<div class="five-wrap-two">
			<div></div>
		</div>
		<div class="five-wrap-therr">
			<div class="five-therr-videoWrap"></div>
			<div class="five-therr-context f-baseX">
				<img class="ml38" src="../assets/img/five/five-therr-contextsvg.png" />
				<div class="f-space"></div>
				<button class="mr38">免费下载</button>
			</div>
		</div>
		
		<bottom class="bottom"></bottom>
	</div>
    <!-- 触发计算属性 -->
    <div v-show="false">{{lazyContextWrap}}</div>
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
  name: "Home",
  components: {
    videocom,
    top,
	primLottie:()=>import('@/components/Lottietest.vue'),
	Lottie:()=>import('@/components/Lottie.vue'),
	rotation,
	bottom
  },
  data() {
    return {
	  sites1:[
		  {svg:require('@/assets/img/rotation/方案1.svg'),url:require('@/assets/img/rotation/Bento1.jpg'),index:0},
		  {svg:require('@/assets/img/rotation/方案2.svg'),url:require('@/assets/img/rotation/Bento2.jpg'),index:1},
		  {svg:require('@/assets/img/rotation/方案3.svg'),url:require('@/assets/img/rotation/Bento3.jpg'),index:2},
		  {svg:require('@/assets/img/rotation/方案4.svg'),url:require('@/assets/img/rotation/Bento4.jpg'),index:3}
	  ],//轮播的数据
	  dom:{
		  topvideo: null,
		  block: null,
		  blockin: null,
		  lazyContextWrap:null,
		  topcontextWrap:null,
		  myVideo:null,
		  Lottie:null
	  },//dom节点
	  videoDom:{
		  videoOne:null,
		  videoTwo:null,
		  videoTherr:null
	  },//therr之中视频节点，因为一开始不会加载所以获取不到节点将会报错，单独拿出在合适的时机获取
      isopacity: 0, //控制中间视频的透明度
      lazyContextWrapobj:{
		  istrue:false,//判断该节点是否划入视图
		  top:null,//lottie A,B开始的位置
	  },//lazy-context-wrap dom节点是否划入视图
	  therrRotation:{
		  istrue:false,
	  },//therr-rotation-wrap dom节点是否划入视图
	  lazyAnimationDataFour:{
		istrue:false,
		top:null
	  },//lazy-animationDataFour dom节点是否划入视图
	  anima:{
		  animationDataA:animationDataA,
		  animationDataB:animationDataB,
		  animationDataFour:animationDataFour
	  },//lottie动画的json数据
	  Lottie:{
	  		  LottieA:0,
	  		  LottieB:0,
			  animationDataFour:0
	  },//lottie动画的播放进度
	  lswidth:null,//中间视频初始宽
	  lsheight:null,//中间视频初始高
	  therrtop:null,//therr粘性布局的top
	  therrVideoIstrue:false,//therr之中的视频加载
	  therrVideoPlay:{
		  one:false,
		  two:false,
		  therr:false
	  },//therr之中的视频播放
	  
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
	  this.getTherrVideoDom()
	  this.lswidth = this.$refs.blockin.offsetWidth
	  this.lsheight = this.$refs.blockin.offsetHeight
    });
  },
  computed: {
    /*
	 监听滚动条
	 */
	lazyContextWrap:function(){
		
		if (store.state.setTop < 3000){
			this.$nextTick(() => {
					  this.topVideoAnima()
			});
		}
		
		
		
		
		if(this.lazyContextWrapobj.istrue == true ){
			this.$nextTick(()=>{
					var LottieTime = (store.state.setTop-this.lazyContextWrapobj.top)/10
					if(LottieTime>=265) return
					
					this.Lottie.LottieA=LottieTime
					this.Lottie.LottieB=LottieTime
					
			})
		}
		
		if(this.lazyAnimationDataFour.istrue == true ){
			this.$nextTick(()=>{
				var LottieTime = (store.state.setTop-this.lazyAnimationDataFour.top)/8
				this.Lottie.animationDataFour = LottieTime
				// console.log(this.lazyAnimationDataFour.top)
			})
		}
		
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
	getTherrVideoDom(){
		this.videoDom.videoOne=this.$refs.therrVideoOne;
		this.videoDom.videoTwo=this.$refs.therrVideoTwo;
		this.videoDom.videoTherr=this.$refs.therrVideoTherr;
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
		this.dom.blockin.style.cssText='width:'+this.lswidth*scalex+'px'+';height:'+this.lsheight*scaley+'px'+'  '
		this.dom.myVideo.style.width= 580+myVideoWidth+'px'
	}
  },
  mounted() {
    //懒加载
    agent_lazy.observe("lazy-context-wrap", (val) => {
		this.$set(this.lazyContextWrapobj,'istrue',!this.lazyContextWrapobj.istrue)
		this.lazyContextWrapobj.top?'':(val.intersectionRect.top==0?'':this.lazyContextWrapobj.top=val.intersectionRect.top)//val.intersectionRect.top
    });
	
	agent_lazy.observe("four-wrap", (val) => {
		if(!this.therrtop){
			this.therrtop=this.$refs.therrstick.getBoundingClientRect().top
			this.copytherrtop=this.therrtop
		}
	});
	
	agent_lazy.observe("therr-rotation-wrap", (val) => {
		this.therrRotation.istrue =!this.therrRotation.istrue
		
	});
	
	agent_lazy.observe("lazy-animationDataFour", (val) => {
		this.$set(this.lazyAnimationDataFour,'istrue',!this.lazyAnimationDataFour.istrue)
		this.lazyAnimationDataFour.top?'':(val.intersectionRect.top==0?'':this.lazyAnimationDataFour.top=store.state.setTop)
	});
	
	agent_lazy.observe("lazy-therr-video-one", (val) => {
		this.therrVideoIstrue?'':this.therrVideoIstrue=true
		this.therrVideoPlay.one=!this.therrVideoPlay.one
		this.therrVideoPlay.one?this.videoDom.videoOne.play():this.videoDom.videoOne.pause()
	});
	
	agent_lazy.observe("lazy-therr-video-two", (val) => {
		this.therrVideoPlay.two=!this.therrVideoPlay.two
		this.therrVideoPlay.two?this.videoDom.videoTwo.play():this.videoDom.videoTwo.pause()
	});
	
	agent_lazy.observe("lazy-therr-video-therr", (val) => {
		this.therrVideoPlay.therr=!this.therrVideoPlay.therr
		this.therrVideoPlay.therr?this.videoDom.videoTherr.play():this.videoDom.videoTherr.pause()
	});
	
  },
};
</script>
<style scoped lang="scss">
.cursor{
	cursor: pointer;
} 
.currencyTitle{
	font-weight: 600;
	font-size: 52px;
	line-height: 68px;
	color: #000;
}
.currencyContext{
	font-size: 16px;
	line-height: 24px;
	color: #000;
}
.currency-right{
	text-align: right;
}
.currency-center{
	text-align: center;
}

.backimg{
	position: fixed;
	width: 100%;
	min-width: 2980px;
	height: auto;
}
.backimgtwo{
	position: fixed;
	width: 100%;
	height: 667.56px;
	z-index: 89;
	top: -200px;
}
.index-wrap {
  width: 100%;
  height: 100vh;
}
.vide-wrap {
  position: relative;
  width: 100%;
  height: 300vh;
  background-color: #333333;
}
.font-wrap{
	position: sticky;
	top: 0;
	width: 100%;
	height: 100vh;
	// z-index: 9;
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
	position: relative;
	width: 150px;
	height: 50px;
	background: transparent;
	border-radius: 30px;
	margin: 28px 20px;
	z-index: 90;
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
	// position:fixed;
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
  width: 100%;
  height:calc(2800px + 100vh);
  margin-top: -100vh;
  background-color: #FFFFFF;
  z-index: 101;
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
.animationDataFour{
	width: 80vw;
	min-width: 1200px;
	height: auto;
	// min-height: 90vh;
}

.therr{
	position: relative;
	width: 100%;
	height:auto;
	padding: 100px 0 0 0;
	margin-top: -100vh;
	z-index: 209;
	background-color: #151515;
}

.therr-stick{
	position: sticky;
	width: 100%;
	height: auto;
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
.therr-video{
	width: 1200px;
	height: 800px;
	background-color: #00FFFF;
	border-radius: 32px;
	margin-top: 42px;
}


.therr-rotation{
	margin-top: 42px;
}
.therr-words-wrap{
	// position: sticky;
	width: 100%;
	height: auto;
	background-color: #FFFFFF;
	margin-top: 58px;
}
.therr-words{
	width: 1200px;
	height: auto;
	margin-top: 50px;
}
.therr-words-button{
	width: 186px;
	height: 47px;
	border-radius: 23.5px;
	background: #fff;
	border: 2px solid #000;
	margin-top: 25px;
	font-weight: 600;
	font-size: 16px;
	text-align: center;
	color: #000;
}
.therr-words-video{
	width: 720px;
	height: 420px;
	overflow: hidden;
}
.therr-words-video video{
	width: 100%;
	height: auto;
}
.ml60{
	margin-left: 60px;
}
.mr60{
	margin-right: 60px;
}

.four-wrap{
	position: relative;
	width: 100%;
	height: calc(3300px + 100vh);
	margin-top: calc(-100vh);
	background-color: #FFFFFF;
	padding: 150px 0 0 0;
	z-index: 309;
	filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.38));
}
.four-context{
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 130px;
}

.four-Lottie{
	width: 1200px;
	height: 800px;
	margin-top: 50px;
	background-color: #00FFFF;
}
.five-wrap{
	position: relative;
	width: 100%;
	height: auto;
	padding: 110px 0 0 0;
	margin-top: -100vh;
	background-color: #FFFFFF;
	z-index: 409;
	filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.38));
}
.five-wrap-one,
.five-wrap-one,
.five-wrap-one{
	width: 1200px;
	height: auto;
}

.five-wrap-one div{
	width: 560px;
	height: 940px;
	background: #fff;
	filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.18));
}

.five-wrap-two div{
	width: 1200px;
	height: 537px;
	border-radius: 32px;
	background: #fff;
	box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.16);
	margin-top: 120px;
}

.five-wrap-therr{
	width: 1200px;
	height: auto;
	background: transparent;
	box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.16);
	margin-top: 145px;
}
.bottom{
	margin-top: 100px;
}
.five-therr-videoWrap{
	width: 1200px;
	height: 544px;
}
.five-therr-context{
	width: 1200px;
	height: 120px;
	background-image: url(../assets/img/five/five-therr-context.png);
	background-size: 100% 100%;
}
.five-therr-context button{
	width: 120px;
	height: 40px;
	border-radius: 20px;
	background: transparent;
	border: 2px solid #fff;
	color: #FFFFFF;
}
</style>