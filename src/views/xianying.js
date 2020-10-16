function mubuImgMousevetwo(x,y,Callback){
  var clix = event.clientX
  var cliy = event.clientY
  var Clix = clix - x
  var Cliy = cliy - y
  Callback(Clix,Cliy)
}


export function drag(node,Callback){
	var fixClix = event.clientX
	var fixCliy = event.clientY
	var paddtop = fixCliy - node.offsetTop
	var paddleft = fixClix - node.offsetLeft
	var mubuImgMouseve=()=>{
	  mubuImgMousevetwo(paddleft,paddtop,Callback)
	}
	
	var mouseup=()=>{
				  document.removeEventListener('mousemove',mubuImgMouseve)
				  document.removeEventListener('mouseup',mouseup)
	}
	document.addEventListener('mousemove',mubuImgMouseve)
	document.addEventListener('mouseup',mouseup)
}

export function prevent(imgNode,wrapNode){
	   imgNode.ondragstart=()=>{
			event.preventDefault()
			// document.querySelector('.mubu').onclick=()=>{
			// 	event.stopPropagation();
			// }
			// event.stopPropagation(); //js阻止事件冒泡
	   }
	var starScale=1
	wrapNode.onmousewheel=()=>{
		var scale = event.wheelDelta/200
		starScale+=scale
		starScale<0.5?starScale=0.5:''
		// this.dom.translateImg.style.zoom=this.scale*100+'%'
		imgNode.style.transform='scale('+starScale+','+starScale+')'

		event.preventDefault()
	} 
}

export function WaterfallFlow(Class,imgData,num=200,Callback){
		
		var img=new Image()
		var imgsrc =[]
		var pro = []
		var imgWidth = []
		var right=[]
		var sub=[]
		var end=[]
		var count=0		
		var compressWidthCount=0
		
		var x=0
		var dfs=()=>{
			
			if( imgData.length<=num?(x==imgData.length):x==num ){
				var domWidth = document.querySelector(Class).clientWidth-17
				for(let i=0;i<pro.length;i++){
					var compressWidth=pro[i]*200
					compressWidthCount+=(compressWidth+20)
					if(compressWidthCount>domWidth){
						
						sub.push(i-1)
						var ls_right=domWidth - (compressWidthCount-compressWidth-20)
						right.push(ls_right)
						
						
						var allcount=0;
						console.log(i-1)
						for(let s=count;s<=i-1;s++){
							allcount+=pro[s]
						}
						var add=(ls_right-25)/allcount
						for(let s=count;s<=i-1;s++){
							end.push(200+add)
						}
						count=i
						compressWidthCount=compressWidth
					}
				}
				console.log(end)
				Callback({imgsrc:imgsrc,end:end})
				return
			}
			imgsrc.push(imgData[x])
			img.src=imgData[x]
			img.onload=function(){
				pro.push(img.width/img.height)
				imgWidth.push(img.width)
				dfs()
			}
			x++
		}
		dfs()
	}