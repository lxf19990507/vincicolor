<template>
  <div @mousedown="drop($event)" class="lunbo-wrap f-alignNone">
      <div class="nav-wrap f-arrayY f-alignNone">
        <div class="nav-text f-arrayY f-centerX" 
		:style="{'background-color':(backgroundColor && indexnewLi==i?backgroundColor:null)}" 
		v-for="(site,i) in imgs" @mouseenter="moust(i,'unevent')" @mouseleave="leave"><!--  -->
            <img :src="site.svg" />
        </div>
      </div>

      <div class="img-wrap f-center">
		  <img :src="site.url" :style="{transition: iscd}" class="img-text w100 f-center" :class="indexnewLi==i?'imgShow':'imgHidden'" v-for="(site,i) in imgs" :key='i' />
      </div>
  </div>
</template>

<script>
  export default {
    props:['message','time','backgroundColor','hoverTextColor'],
    data() {
      return {
        iscd:null,//手动设置过渡间隔时间，便于在左右滑动时清除其过渡时间且不改变父组件传过来的值
        indexnewLi:0,//当前滑入的元素
        indexoldLi:0,//上次滑入的元素
        imgs:[],//导航与图标数据
		timer:setInterval(()=>{
			this.indexnewLi++
			this.indexnewLi>=this.imgs.length?this.indexnewLi=0:''
			this.moust(this.indexnewLi)
		},3000)
		
      }
    },
    created() {
      this.imgs=this.message//获取父组件第一次传值时的数据
      this.iscd=this.time//设置过渡时间
    },
    methods:{
	  //禁止内容被选中，可以阻止默认拖拽。
      drop(ev){
        ev.preventDefault();
      },
	  /*
	  导航高亮与滑入改变图片显示
	  val{int}鼠标滑入的导航下标
	  */
      moust(val,unevent){
		unevent?clearInterval(this.timer):''

        this.indexnewLi=val
        this.indexoldLi=val
      },
	  leave(){
		  this.timer=setInterval(()=>{
		  	this.indexnewLi++
		  	this.indexnewLi>=this.imgs.length?this.indexnewLi=0:''
		  	this.moust(this.indexnewLi)
		  },3000)
	  }
    },
	mounted() {
		this.timer
	}
  };
</script>
<style scoped>
.lunbo-wrap{
	width: 1200px;
	height: 520px;
    padding: 44px 70px;
	background-color: #FFFFFF;
	border-radius: 28px;
}
.nav-text{
	width: 208px;
	height: 93px;
	cursor: pointer;
	background-color: #FFFFFF;
	border-radius: 10px;
	overflow: hidden;
}

.img-wrap{
	position: relative;
	overflow: hidden;
	width: 740px;
	height: 433px;
	padding: 20px;
	background-color: rgba(255,255,255,0.1);
}
.imgHidden{
	opacity: 0;
	z-index: 0;
}
.imgShow{
	opacity: 1;
	z-index: 1;
}
.img-text{
	position: absolute;
	width: 740px;
	height: auto;
}
.icon-font{
  width: 34px;
  height: 32px;
}
</style>
