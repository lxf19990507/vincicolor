<template>
  <div class="home">
    <input type="file" @change="testtwo($event)" multiple="multiple" accept="image/*" />
	<div class="img-wrap">
		<img  v-for="(item,i) in imgsrc" :src="imgsrc.length>0?imgsrc[i]:''" :style="{width:imgWidth+'px',top:imgarr[i][2]+'px',left:imgarr[i][3]+'px' }" />
	</div>
  </div>
</template>

<script>
import {WaterfallFlow} from './pubu.js'


export default {
  name: 'pubu',
  data(){
	  return {
		  imgWidth:null,
		  imgarr:[],//返回结果，
		  imgsrc:[],//保存所有图片地址或者base64数据
		  
	  }
  },
  methods:{
	testtwo(e){
		var imgData=[];
		for(var key in e.target.files){
			if(isNaN(parseInt(key))==true){
				break
			}
			imgData.push( URL.createObjectURL(e.target.files[key]) )
		}
		WaterfallFlow(imgData,200,(val)=>{
			this.imgWidth=val.imgWidth
			this.imgarr.push(...val.imgarr)
			this.imgsrc.push(...val.imgsrc)
			
		})
		
	},
	
	//clientWidth 处理兼容性
	getClient() {
	    return {
	        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	    }
	}
  },
  mounted(){
	  
	  // var pub = new pubArray({})
	  // pub.test()
	  // 页面尺寸改变时实时触发
	  window.onresize = function() {
	      //重新定义瀑布流
	      this.waterFall();
	  };
	  //初始化
	  window.onload = function(){
	      //实现瀑布流
	      // this.waterFall();
	  }
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
		position: absolute;
		border: 2px solid #000000;
	}
</style>