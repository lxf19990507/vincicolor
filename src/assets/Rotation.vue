<template>
  <div @mousedown="drop($event)" class="lunbo-wrap f-center">
    <div class="f-alignNone" :class="navposition=='right'?'f-farrayX':'f-arrayX'" style="width: 1024px;">
      <div class="nav-wrap">
        <div class="nav-text f-arrayX mt10" :style="{'background-color':(backgroundColor && indexnewLi==i?backgroundColor:null),'color':(indexnewLi==i?hoverTextColor:textcolor)}" :class="[!backgroundColor && indexnewLi==i?'colour':'',navbackgroundColor?'lsatext':'lstext']"  v-for="(site,i) in imgs" @mouseenter="moust(i)"><!--  -->
          <div class="w20 h100 f-center">
            <svg class="icon icon-font" aria-hidden="true">
              <use :xlink:href="site.navsvg"></use>
            </svg>
          </div>
          <div class="w80 h100 f-arrayY f-centerX">
            <p class="f-size20 fwe7">{{site.navtop}}</p>
            <p class="f-size14 mt6">{{site.navbottom}}</p>
          </div>
        </div>
      </div>

      <div class="img-wrap" :style="{marginTop:imgtop}">

          <div class="text f-center  w100 h100"  ref='imgWrap' @mousedown="down($event)">
              <div draggable="false" :style="{transition: iscd,left:imgs[i].index*595+'px'}" ref='imgs' class="img-text w100 f-center" v-for="(site,i) in imgs" :key='i'>
                <video width="400" ref='videos' style="width: 100%; height: 100%;"  loop muted><!-- autoplay -->
                  <source :src="site.imgurl" type="video/mp4">
                </video>
              </div>
          </div>
      </div>
    </div>
    <!-- <div style="width: 100px;height: 100px;overflow: hidden;">{{imgurls[1]}}</div> -->
  </div>
</template>

<script>
  export default {
    props:['message','navposition','navwidths','imgwidth','imgheight','imgtop','time','backgroundColor','textcolor','hoverTextColor','navbackgroundColor','navbottom'],
    data() {
      return {
        iscd:null,//手动设置过渡间隔时间，便于在左右滑动时清除其过渡时间且不改变父组件传过来的值
        indexnewLi:0,//当前滑入的元素
        indexoldLi:0,//上次滑入的元素
        imgs:[],//导航与图标数据
        imgurls:[null,null,null]
      }
    },
    created() {
      // console.log(this.message)
      // this.imgurls=this.imgurls=this.message.map((item,i)=>{ return item.imgurl})
      // setTimeout(()=>{ this.imgurls=this.message.map((item,i)=>{ return item.imgurl}) }, 3000);
      //异步加载视频，失败
      this.imgs=this.message//获取父组件第一次传值时的数据
      this.iscd=this.time//设置过渡时间
      // $next
      this.$nextTick(function () {
        this.$refs.videos[0].play()
      })
    },
    watch:{
      indexnewLi:function(newval,oldval){
        this.$refs.videos[oldval].pause()
        this.$refs.videos[newval].play()
      }
    },
    methods:{
      drop(ev){
        ev.preventDefault();
      },//禁止内容被选中，可以阻止默认拖拽。
      sort(){
        var Width=this.$refs.imgWrap.offsetWidth;
        for(var i=0;i<this.imgs.length;i++){
          this.$refs.imgs[i].style.left=this.imgs[i].index*Width+'px'
        }
      },
      down(e){
        var _this=this//将this传入下一级，有待改进。
        this.iscd='0s'//鼠标按下清除过渡时间
        var downMouseX=e.clientX//鼠标按下时的位置
        var indexArr=this.imgs.map((item)=>{
          return [item.index]
        })//定义一个数组保存鼠标按下时的排序下标。
        var leftarr=[]//定义一个数组保存鼠标按下时的浮动左边距
        for(let x=0;x<this.imgs.length;x++){
          leftarr.push(this.$refs.imgs[x].style.left)
        }

        let moveFun=function(e){
            for(var s=0;s<_this.imgs.length;s++){
              _this.$refs.imgs[s].style.left=parseInt(leftarr[s])+parseInt(e.clientX-downMouseX)+'px'
            }//按下鼠标左右滑动时每一个图片层的浮动左边距
        }
        /*
        图片层容器的滑入事件
        e{Object}元素本身
        */
        var mouseUpIndex=(e)=>{
          //let index=Math.round((e.clientX-downMouseX)/200)
          if((e.clientX-downMouseX)>100 && _this.imgs[_this.imgs.length-1].index<_this.imgs.length-1){
            for(let k=0;k<_this.imgs.length;k++){
              _this.imgs[k].index=parseInt(_this.imgs[k].index)+parseInt(1)
            }
            _this.indexnewLi=parseInt(_this.indexnewLi)-parseInt(1)
            _this.indexoldLi=_this.indexnewLi
          }else if((downMouseX-e.clientX)>100 && _this.imgs[_this.imgs.length-1].index>0){
            for(let k=0;k<_this.imgs.length;k++){
              _this.imgs[k].index=parseInt(_this.imgs[k].index)-parseInt(1)
            }
            _this.indexnewLi=parseInt(_this.indexnewLi)+parseInt(1)
            _this.indexoldLi=_this.indexnewLi
          }
        }
        /*
        鼠标松开时排序下标根据松开时的位置与按下时的位置对比改变下标
        e{Object}调用时传递进来的参数
        */
        this.$refs.imgWrap.addEventListener('mousemove',moveFun);//为图片层的容器添加一个滑入事件
        this.$refs.imgWrap.onmouseup=(e)=>{
          this.iscd=this.time//鼠标松开恢复过渡时间
          this.$refs.imgWrap.removeEventListener('mousemove',moveFun);//清除滑入事件
          mouseUpIndex(e)
          this.sort()
        }
        this.$refs.imgWrap.onmouseleave=(e)=>{
          this.iscd=this.time
          this.$refs.imgWrap.removeEventListener('mousemove',moveFun);
          //mouseUpIndex(e)
          this.sort()
        }
      },
      /*
      鼠标按下时发生的事
      */
      moust(val){
        this.indexnewLi=val
        var sort=this.indexnewLi-this.indexoldLi
            for(var s=0;s<this.imgs.length;s++){
              this.imgs[s].index=parseInt(this.imgs[s].index)-parseInt(sort)
            }
        this.indexoldLi=val
      }
      /*
      导航高亮与滑入改变图片显示
      val{int}鼠标滑入的导航下标
      */
    }
  };
</script>
<style scoped>
.lunbo-wrap{
  padding: 58px 58px;
}
.nav-text{
  width: 340px;
  height: 72px;
  border-radius: 12px;
  cursor: pointer;
  color: #FFFFFF;
}
.lstext{
  background-color: rgba(0,0,0,0.1);
}
.lsatext{
  background-color: rgba(0,0,0,0);
}
.colour{
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(53deg, #ffa665, #c389ff, #36acff 110%);
}
.text{
  position: relative;
  height: 100%;
  overflow: hidden;
}
.img-wrap{
  width: 635px;
  height: 378px;
  padding: 20px;
  /* margin-top: -138px; */
  background-color: rgba(255,255,255,0.1);
  box-shadow: 0px 22px 52px 8px rgba(0, 5, 255, 0.6);
}
.img-text{
  position: absolute;
}
.icon-font{
  width: 34px;
  height: 32px;
}
</style>
