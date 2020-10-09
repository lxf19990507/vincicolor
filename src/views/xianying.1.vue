<template>
  <div class="home" @click="reset">
    <input type="file" @change="test($event)" multiple="multiple" accept="image/*" />
	<div class="mubu f-center" v-if="mubuistrue" >
		<div class="mubuimg-wrap f-center"> <img ref='translateImg' :style="{top:cliy?cliy+'px':'' ,left:clix?clix+'px':'' }" :src="mubusrc" @click.stop="" @mousedown="mubuImgMousedown" /> </div> 
	</div>
	<div class="img-wrap f-autobr">
		 <img :src="item" v-for="(item,i) in imgsrc" @click.stop="mubu(item)" /> 
	</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'pubu',
  data(){
	  return {
		  imgarr:null,
		  imgsrc:null,
		  mubuistrue:false,//
		  mubusrc:null,
		  dom:{
			  translateImg:null
		  },
		  clix:null,
		  cliy:null,
		  scale:1
	  }
  },
  methods:{
	  reset(){
		  this.mubuistrue=false
		  this.clix=null,
		  this.cliy=null,
		  this.scale=1
	  },
	  getdom(){
		this.dom.translateImg=this.$refs.translateImg
	  },
	  test(e){
	  	var img=new Image()
	  	var imgarr=[]
	  	var imgsrc=[]
	  	
	  	var i=0
	  	var dfs=()=>{
	  		if(i==e.target.files.length){
	  			this.imgarr=imgarr
	  			this.imgsrc=imgsrc
	  			
	  			console.log(imgarr)
	  			return
	  		}
	  		
	  		var url = URL.createObjectURL(e.target.files[i]);
	  		imgsrc.push(url)
	  		i++
	  		img.src=url
	  		img.onload=function(){
	  			imgarr.push([img.width,img.height])
	  			dfs()
	  		}
	  	}
	  	dfs()
	  },
	  mubu(src){
		  this.mubusrc=src
		  this.mubuistrue=true
		  this.$nextTick(()=>{
			  this.getdom()
		  })
	  },
	  mubuImgMousedown(){
		  var fixClix = event.clientX
		  var fixCliy = event.clientY
		  var paddtop = fixCliy - this.dom.translateImg.offsetTop
		  var paddleft = fixClix - this.dom.translateImg.offsetLeft
		  // console.log(paddtop,paddleft)
		  var mubuImgMouseve=()=>{
			  this.mubuImgMouseve(paddleft,paddtop)
		  }
		  var mouseup=()=>{
			  document.removeEventListener('mousemove',mubuImgMouseve)
			  document.removeEventListener('mouseup',mouseup)
		  }
		  document.addEventListener('mousemove',mubuImgMouseve)
		  document.addEventListener('mouseup',mouseup)
	  },
	  mubuImgMouseve(x,y){
		  var clix = event.clientX
		  var cliy = event.clientY
		  this.clix = clix - x
		  this.cliy = cliy - y
	  },
	  prevent(){
		  this.$nextTick(()=>{
			   this.dom.translateImg.ondragstart=()=>{
			  		event.preventDefault()
					// document.querySelector('.mubu').onclick=()=>{
					// 	event.stopPropagation();
					// }
					// event.stopPropagation(); //js阻止事件冒泡
			   }
		  })
		document.querySelector('.home').onmousewheel=()=>{
			var scale = event.wheelDelta/200
			this.scale+=scale
			this.scale<0.5?this.scale=0.5:''
			// this.dom.translateImg.style.zoom=this.scale*100+'%'
			this.dom.translateImg.style.transform='scale('+this.scale+','+this.scale+')'

			event.preventDefault()
		} 
	  },
	  unprevent(){
		  document.querySelector('.home').onmousewheel=()=>{
		  	
		  } 
	  }
  },
  watch:{
	  mubuistrue(newv,oldv){
		  newv==true?this.prevent():this.unprevent()
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
		border: 2px solid aqua;
		/* float: left; */
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