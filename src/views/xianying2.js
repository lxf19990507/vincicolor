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

export function WaterfallFlow(imgData,num=200,Callback){
		var img=new Image()
		var imgsrc =[]
		var pro = []
		
		var i=0
		var dfs=()=>{
			if( imgData.length<=num?(i==imgData.length):i==num ){
				
				Callback({imgsrc:imgsrc,pro:pro})
				return
			}
			imgsrc.push(imgData[i])
			img.src=imgData[i]
			img.onload=function(){
				pro.push(img.width/img.height)
				dfs()
			}
			i++
		}
		dfs()
	}