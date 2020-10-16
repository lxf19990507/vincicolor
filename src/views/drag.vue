<template>
	<div class="drag-wrap">
		<div class="dataA-wrap">
			<div class="dataA" v-for="(site,i) in dataA" @mousedown="drag($event,'dataA',i)" @mousemove="isMouseMove==true && test($event,'dataA',i) " >
				{{site.val}}
			</div>
		</div>
		<div class="dataB-wrap">
			<div class="dataB" v-for="(site,i) in dataB" @mousedown="drag($event,'dataB',i)" @mousemove="isMouseMove==true && test($event,'dataB',i)" >
				{{site.val}}
			</div>
		</div>
		
		<div v-show="false">{{istest}}</div>
		
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				isMouseMove:false,
				dataA:[
					{val:1},
					{val:2},
					{val:3}
				],
				dataB:[
					{val:4},
					{val:5},
					{val:6}
				],
				isdom:null,//划入的节点
				isAbout:null,//鼠标在节点的左右侧
				oldDom:null,//鼠标按下的节点
				arrName:null,
				arrIndex:null,
				stardata:null,
				count:0
			}
		},
		computed:{
			istest(newV,oldV){
				if(this.isdom==this.oldDom || this.isdom==null)return;
				
				var parentnode=this.isdom.parentNode
				var insert=parentnode.querySelector('.insert')
				var clonedom=document.createElement('div')
				clonedom.style.cssText='width: 50px;height: 50px;visibility: hidden;float: left;'
				clonedom.className='insert'
				
				parentnode.onmouseleave=()=>{
						if(this.isdom==null)return;
						
						var _parentnode=this.isdom.parentNode
						var _insert=_parentnode.querySelector('.insert')
						_insert?_parentnode.removeChild(_insert):''
				}
				
				if(this.isAbout=='left'){
					insert?parentnode.removeChild(insert):''
					parentnode.insertBefore(clonedom,this.isdom)
				}else{
					insert?parentnode.removeChild(insert):''
					this.insertAfter(clonedom,this.isdom)
				}
				this.count++
				return [this.isdom,this.isAbout]
			}
		},
		methods:{
			insertAfter(newElement, targentElement) {
			        var parent = targentElement.parentNode;
			        if (parent.lastChild == targentElement) {
			            parent.appendChild(newElement);
			        } else {
			            parent.insertBefore(newElement, targentElement.nextSibling)
			        }
			},
			test(e,obj,index){
				this.isdom= e.target
				this.arrName=obj
				this.arrIndex=index

				if( e.clientX-e.target.offsetLeft>e.target.offsetWidth/2 ){
					this.isAbout='right'
				}else{
					this.isAbout='left'
				}
				
				
			},
			drag(e,obj,index){
				this.stardata=this[obj][index]
				this.isMouseMove=true
				this.oldDom=Object.assign(e.target)
				
				
				
				e.target.ondragstart=()=>{
					event.preventDefault()
				}
				var mouseup=()=>{
							  this.isMouseMove=false
							  var insert=this.isdom.parentNode.querySelector('.insert')
							  if(this.isdom!=null && insert){
								  
								  if(this.isAbout=='left'){
									this.isdom.parentNode.removeChild( insert )
									this[this.arrName].splice(this.arrIndex,0,this.stardata)
								  }else{
									this.isdom.parentNode.removeChild( insert )
									this[this.arrName].splice(this.arrIndex+1,0,this.stardata)
								  }
							  }
							  this.isdom=null
							  document.removeEventListener('mousemove',mubuImgMouseve)
							  document.removeEventListener('mouseup',mouseup)
				}
				var mubuImgMouseve=()=>{
					this.dragfun()
				}
				document.addEventListener('mousemove',mubuImgMouseve)
				document.addEventListener('mouseup',mouseup)
			},
			dragfun(){
				// console.log(123)
			}
		},
		created() {
			
		},
		mounted() {
		}
	}
</script>

<style scoped>
	.drag-wrap{
		width: 100%;
		height: 100vh;
	}
	.dataA,
	.dataB{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: deepskyblue;
		float: left;
		margin: 10px;
		transition: all 1s;
		-moz-user-select:none;
		      -webkit-user-select:none;
		      user-select:none;
	}
	.dataA-wrap,
	.dataB-wrap{
		width: 100%;
		height: 50px;
		margin-top: 50px;
	}
</style>
