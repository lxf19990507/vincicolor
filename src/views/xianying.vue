<template>
  <div ref='home' class="home" @click="reset">
    <input type="file" @change="testtherr($event)" multiple="multiple" accept="image/*" />
	<div class="mubu f-center" v-if="mubuistrue" >
		<div class="mubuimg-wrap f-center"> <img ref='translateImg' 
		:style="{top:cliy?cliy+'px':'' ,left:clix?clix+'px':'' }" 
		:src="mubusrc" @click.stop="" @mousedown="testtwo" /> </div> <!-- mubuImgMousedown-->
	</div>
	<div class="img-wrap ">
		 <img ref='imgref' :style="{height:imgHeight[i]?imgHeight[i]+'px':'200px' }"  :src="item" v-for="(item,i) in imgsrc" @click.stop="mubu(item)" /> 
	</div>
  </div>
</template>

<script lang="ts">
import {drag,prevent,WaterfallFlow} from './xianying.js'
	
export default {
  name: 'pubu',
  data(){
	  return {
		  imgsrc:[],
		  mubuistrue:false,//幕布遮罩是否显示
		  mubusrc:null, //遮罩之中的图片
		  dom:{	//存储dom节点
			  translateImg:null,
			  home:null,
		  },
		  clix:null,
		  cliy:null,
		  scale:1,
		  imgHeight:[]
	  }
  },
  methods:{
	  testtwo(){
		  drag(this.dom.translateImg,(clix,cliy)=>{
			  this.clix=clix
			  this.cliy=cliy
		  })
	  },
	  testtherr(e){
		  	var imgData=[];
		  	for(var key in e.target.files){
		  		if(isNaN(parseInt(key))==true){
		  			break
		  		}
		  		imgData.push( URL.createObjectURL( e.target.files[key]) )
		  	}
		  	WaterfallFlow('.img-wrap',imgData,500,(val)=>{
		  		this.imgsrc.push(...val.imgsrc)
				this.imgHeight.push(...val.end)
		  	})
	  },
	  reset(){
		  this.mubuistrue=false
		  this.clix=null,
		  this.cliy=null,
		  this.scale=1
	  },
	  getdom(){
		this.dom.translateImg=this.$refs.translateImg
		this.dom.home=this.$refs.home
	  },
	  mubu(src){
		  this.mubusrc=src
		  this.mubuistrue=true
		  this.$nextTick(()=>{
			  this.getdom()
		  })
	  },
	  unprevent(){
		  document.querySelector('.home').onmousewheel=()=>{
		  	
		  } 
	  }
  },
  watch:{
	  mubuistrue(newv,oldv){
		  newv==true?this.$nextTick(()=>{
			  prevent(this.dom.translateImg,this.dom.home)
		  }):this.unprevent()
	  }
  },
  mounted(){
	  // console.log(document.body.offsetWidth)
	  
  }
};
</script>
<style scoped>
	.img-wrap{
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
	.img-wrap img{
		width: auto;
		max-width: 100%;
		height: 200px;
		/* border: 2px solid aqua; */
		
		float: left;
		margin: 10px;
		
	}
	.mubu{
		position: fixed;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);
		top: 0;
		left: 0;
		z-index: 99;
	}
	.mubu img{
		position: absolute;
		width: 500px;
		height: auto;
		/* transform-origin: ; */
	}
	.mubuimg-wrap{
		width: 60%;
		max-width: 1200px;
		height: 100vh;
		overflow: auto;
	}
</style>