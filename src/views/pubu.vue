<template>
  <div class="home">
    <input type="file" @change="testtwo($event)" multiple="multiple" accept="image/*" />
	<div class="img-wrap">
		<img v-for="(item,i) in imgsrc" :src="imgsrc.length>0?imgsrc[i]:''" :style="{width:imgWidth+'px',top:imgarr[i][2]+'px',left:imgarr[i][3]+'px' }" />
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
	// test(e){
	// 	var img=new Image()
	// 	var imgarr =[]
	// 	var imgsrc =[]
		
	// 	var i=0
	// 	var dfs=()=>{
	// 		if( e.target.files.length<=200?(i==e.target.files.length):i==200 ){
	// 			this.imgsrc.push(...imgsrc)
	// 			var objdata=new waterFall({imgarr:imgarr}).sort()
	// 			this.imgarr.push( ...objdata.imgarr )
	// 			this.imgWidth = objdata.itemWidth
	// 			return
	// 		}
			
	// 		var url = URL.createObjectURL(e.target.files[i]);
	// 		imgsrc.push(url)
	// 		i++
	// 		img.src=url
	// 		img.onload=function(){
	// 			imgarr.push([img.width,img.height])
	// 			dfs()
	// 		}
			
	// 	}
	// 	dfs()
	// },
	// waterFall({testi=0,column=6,ml=20,mt=20,imgarr,arr=[]}){
	// 	testi++
	//     // 1 确定图片的宽度 - 滚动条宽度
	//     var pageWidth = this.getClient().width-8;
	//     var columns = column; //3列
	//     var itemWidth = parseInt(pageWidth/columns); //得到item的宽度
	//     // $(".item").width(itemWidth); //设置到item的宽度
	// 	// this.imgWidth = itemWidth //将宽度传递给外部
	//     // var arr = [];
	// 	var i=0
	// 	for(var i=0;i<imgarr.length;i++){
	// 		var height=(itemWidth/imgarr[i][0])*imgarr[i][1] 
	// 		if(i<columns ){
	// 			imgarr[i].push(0,(itemWidth) * i+ml*i);
	// 			arr.push(height);
	// 		}else{
	// 			// 3 找到数组中最小高度  和 它的索引
	// 			var minHeight = arr[0];
	// 			var index = 0;
	// 			for (var j = 0; j < arr.length; j++) {
	// 			    if (minHeight > arr[j]) {
	// 			        minHeight = arr[j];
	// 			        index = j;
	// 			    }
	// 			}
	// 			// 4 设置下一行的第一个盒子位置
	// 			// top值就是最小列的高度
	// 			imgarr[i].push(arr[index]+mt ,(itemWidth) * index+ml*index);
	// 			// 5 修改最小列的高度
	// 			// 最小列的高度 = 当前自己的高度 + 拼接过来的高度
	// 			arr[index] = arr[index] + height+mt;//设置30的距离
	// 		}
	// 	}
	// 	console.log(itemWidth)
	// 	return {imgarr:imgarr,itemWidth:itemWidth }
	// },
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