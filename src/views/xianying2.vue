<template>
  <div ref='home' class="home" @click="reset">
    <input type="file" @change="testtherr($event)" multiple="multiple" accept="image/*" />
	<div class="mubu f-center" v-if="mubuistrue" >
		<div class="mubuimg-wrap f-center"> <img ref='translateImg' 
		:style="{top:cliy?cliy+'px':'' ,left:clix?clix+'px':'' }" 
		:src="mubusrc" @click.stop="" @mousedown="testtwo" /> </div> <!-- mubuImgMousedown-->
	</div>
	<div class="img-wrap ">
		 <img ref='imgref' :src="item" v-for="(item,i) in imgsrc" @click.stop="mubu(item)" /> 
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
		  imgdom:null,
		  imgleft:[],
		  pro:[],
		  sub:[]
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
		  	WaterfallFlow(imgData,50,(val)=>{
		  		this.imgsrc.push(...val.imgsrc)
				this.pro.push(...val.pro)
				
				 this.$nextTick(()=>{
					setTimeout(()=>{
					
					
					var domWidth=document.body.offsetWidth
					this.imgdom=this.$refs.imgref
					for(var i=0;i<this.imgsrc.length;i++){
						this.imgleft.push(this.imgdom[i].offsetLeft )
						
						if(this.imgdom[i].offsetLeft == 10 && i!=0 ){
							this.sub.push( {right:domWidth-(this.imgdom[i-1].offsetWidth+this.imgdom[i-1].offsetLeft),index:i-1 } )
						}
					}
					
					for(var i=0;i<this.sub.length;i++){
						if(i==0){
							continue
						}
						var right=this.sub[i].right
						if(right<=30){
							continue
						}
						var all=this.sub[i].index-this.sub[i-1].index
						 
						 var allcount=0;
						 for(var s=this.sub[i-1].index;s<this.sub[i].index;s++){
							 allcount+=this.pro[s+1]
						 }
						 var add=(right-30)/allcount
						 console.log(right)
						for(var s=this.sub[i-1].index;s<this.sub[i].index;s++){
							console.log(this.imgdom[s+1],add,this.pro[s],right,this.imgdom[s+1].offsetLeft )
							 this.imgdom[s+1].style.height=200+add+'px'
						}
					}
					},1000)
				})
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
		this.dom.imgdom=this.$refs.imgref
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