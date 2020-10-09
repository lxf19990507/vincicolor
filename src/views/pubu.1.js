
var waterFallCount=0;
var arr=[];
class waterFall{
	constructor({column=6,ml=20,mt=20,imgarr}) {
	    this.column=column
		this.ml=ml
		this.mt=mt
		this.imgarr=imgarr
		this.arr=arr
		this.testcd='6'
	}
	sort(){
		waterFallCount++ //用于记录调用次数
		
	    // 1 确定图片的宽度 - 滚动条宽度
	    var pageWidth = getClient().width-8;
	    var itemWidth = parseInt(pageWidth/this.column); //得到item的宽度
		//主体逻辑
		for(var i=0;i<this.imgarr.length;i++){
			if(waterFallCount>1){
				this.unfirstSort(i,itemWidth)
			}else{
				this.firstSort(i,itemWidth)
			}
			
		}
		return {imgarr:this.imgarr,itemWidth:itemWidth}
	}
	
	firstSort(i,itemWidth,unI){
		unI?unI=unI:unI=i //第二次调用时，第一行是否已满
		var height=(itemWidth/this.imgarr[i][0])*this.imgarr[i][1] //确定当前图片的高度
		if(this.arr.length <this.column){ //第一行未满时
			this.imgarr[i].push(0,(itemWidth) * unI+this.ml*unI);
			this.arr.push(height);
		}else{
			// 3 找到数组中最小高度  和 它的索引
			var clonearr=this.arr.slice(0)
			clonearr.sort((a,b)=>{
				return a-b
			})
			var minHeight=clonearr[0]
			var index = this.arr.indexOf(minHeight)
			// 4 设置下一行的第一个盒子位置
			this.imgarr[i].push(this.arr[index]+this.mt ,(itemWidth) * index+this.ml*index);
			// 5 修改最小列的高度
			// 最小列的高度 = 当前自己的高度 + 拼接过来的高度
			this.arr[index] = this.arr[index] + height+this.mt;//设置30的距离
		}
	}
	
	unfirstSort(i,itemWidth){
		if(this.arr.length < this.column){
			this.firstSort(i,itemWidth,this.arr.length)
		}else{
			this.firstSort(i,itemWidth)
		}
	}
	
} 

function getClient() {
	    return {
	        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	    }
	}

export function WaterfallFlow(e,num=200,Callback){
		var img=new Image()
		var imgarr =[]
		var imgsrc =[]
		
		var i=0
		var dfs=()=>{
			if( e.target.files.length<=num?(i==e.target.files.length):i==num ){
				var objdata=new waterFall({imgarr:imgarr}).sort()
				Callback({imgarr:objdata.imgarr,imgWidth:objdata.itemWidth,imgsrc:imgsrc })
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
	}



