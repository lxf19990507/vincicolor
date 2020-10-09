<template>
  <div class="top-nav w100 f-centerX" :class="[topbackcolor,topbackcolor2]">
    <div class="top-wrap f-arrayX f-centerY">
      <div class="ff1 f-arrayX f-centerY">
        <router-link to="/" tag="div">
          <img src="@/assets/svg/logo.svg" alt="logo" class="logo" width="110px">
        </router-link>
      </div>
      <!--导航左侧-->
      <div class="top-hidden f-centerX" :class="hiddenHeight==true?'hiddenHeight':''">
        <div class='top-hidden-text f-centerY'>
          <a href="https://pszhuli.com/" target="_blank" class="top-hidden-one">
            <p class="p-absolute color-white f-size18 fwe8 allproduct">所有产品</p>
            <img src="../assets/img/PS设计助理 - 网站卡片@2x.png" />
            <button class="hidden-button f-center">点击了解</button>
          </a>
          <a :href="topHiddenVal.url" class="f-center f-arrayY color-white" :class="topHiddenVal.class" v-for="(topHiddenVal,i) in topHidden" :key='i' target="_blank">
            <svg class="icon top-hidden-icon" aria-hidden="true" v-if="i==1">
              <use :xlink:href="topHiddenVal.svg"></use>
            </svg>
            <img src="../assets/img/达芬奇调色.png" class="hidden-button-svg2" v-else/>
            <p class="mt20">{{topHiddenVal.text1}}</p><p>{{topHiddenVal.text2}}</p>
          </a>
        </div>
      </div>
      <!-- 导航中间隐藏部分-->
        <div v-for="(site,i) in navs" :key='i' class="nav-text f-center f-arrayY" :class="lineLi==i && iscd!='/login' && (topbackcolor=='topbackcolor' || topbackcolor2=='topbackcolor2')?'topHover':''" @click="hidden(i)"  @mouseenter="lineLigh(i)" @mouseleave="lineLi=null,mrtop=null">
          <router-link :to="site.url" class="color-white h100 f-center f-arrayY" v-if="i!=2 && i!=1">
          <div class="ff1"></div>
          <div >{{site.name}}</div>
          <div class="ff1">
            <div class="nav-cen-line line-one f-center"  v-if="i==0" ref='hidden'>
              <svg class="icon iconCen-one" aria-hidden="true">
                <use xlink:href="#icon-Drop-downselection" ></use>
              </svg>
            </div>
            <div class="nav-cen-line  f-center" v-else><div class="hline" v-if="i==lineLi"></div></div>
          </div>
          </router-link>

          <a target="_blank" :href="site.url" class="color-white h100 f-center f-arrayY" v-if="i==2 || i==1">
          <div class="ff1"></div>
          <div >{{site.name}}</div>
          <div class="ff1">
            <div class="nav-cen-line line-one f-center"  v-if="i==0" ref='hidden'>
              <svg class="icon iconCen-one" aria-hidden="true">
                <use xlink:href="#icon-lujing3" ></use>
              </svg>
            </div>
            <div class="nav-cen-line  f-center" v-else><div class="hline" v-if="i==lineLi"></div></div>
          </div>
          </a>

        </div>
      <!-- 导航中间 -->
      <div class="ff1 f-rightX">
        <div class="w100 f-rightX">
          <a href="https://shejizhuli-1254448869.cos.ap-guangzhou.myqcloud.com/web/installPack/%E8%AE%BE%E8%AE%A1%E5%8A%A9%E7%90%86-%E4%B8%8B%E8%BD%BD%E5%9B%BE%E6%A0%87%E5%AE%89%E8%A3%85%E5%8C%85.zip" download="Design-2.0.zip">
          <button class="free mr8 f-center fwe10" :class="freeButtonHover" @mouseenter="freeButtonLight" @mouseleave="freeButtonHover=null">
            <p class="" :class="freeButtonHover=='freeButtonHover'?'':''">{{freeButtonHover=='freeButtonHover'?'free':'免费下载'}}</p>
            <transition name="fade" >
              <svg class="icon button-svg1" aria-hidden="true" v-if="freeButtonHover=='freeButtonHover'" >
                <use xlink:href="#icon-Blackdownload" ></use>
              </svg>
            </transition>
          </button>
          </a>

        </div>
      </div>
      <!-- 导航右侧 -->
    </div>
  </div>
</template>

<script>
  export default {
    // props:['topbackcolor'],
    data() {
      return {
        iscd:null,
        topbackcolor:null,
        topbackcolor2:null,
        lineLi:null,//滑入菜单下划线显示加背景改变
        freeButtonHover:null,//顶部菜单栏免费按钮滑入
        buyButtonHover:null,//顶部菜单栏购买按钮滑入
        hiddenHeight:false,//顶部菜单栏隐藏内容显示
        lasttime:0,
        navs:[
          {name:'产品中心',url:''},
          {name:'搜图导航',url:'https://www.91sotu.com/'},
          // {name:'帮助文档',url:'https://pszhuli.com/help/'},
          {name:'联系我们',url:''}
        ],//顶部菜单栏数据
        topHidden:[
          {class:'top-hidden-two',svg:'#icon-PSDmobanshangcheng_Color',text1:'设计助理',text2:'达芬奇配色',url:'https://vinci.pszhuli.com/'},
          {class:'top-hidden-therr',svg:'#icon-PSDmobanshangcheng_Color',text1:'设计助理',text2:'模版商城',url:'https://mb.pszhuli.com/'}
        ]
      }
    },
    created() {
      this.iscd=this.$route.path
    },
    watch:{
      $route:function(){
        this.iscd=this.$route.path
      }
    },
    methods:{
      hidden(val){
        if(val==0){
          if(!this.topbackcolor2){
            this.topbackcolor2='topbackcolor2'
          }else{
            this.topbackcolor2=''
          }
          this.hiddenHeight=!this.hiddenHeight
        }

        if(val==3){
          var scrolltop=document.documentElement.scrollTop
          document.documentElement.scrollTop=8500
        }

      },
      /*
      顶部菜单栏隐藏内容显示与否
       val{Number}下标判断点击的导航是否正确
       */
      lineLigh(val){
        this.lineLi=val
      },
      /*
      顶部菜单下划线显示
      val{Number}根据下标显示对应下划线
      */
      freeButtonLight(){
        this.freeButtonHover='freeButtonHover'
      },
      //顶部免费按钮滑入时绑定的类由null变化为freeButtonHover
      buyButtonLight(){
        var myDate = new Date();
        var sum=parseInt(myDate.getSeconds()*1000) + parseInt(myDate.getMilliseconds())
        if(sum-this.lasttime>500){
          this.buyButtonHover='buyButtonHover'
        }else{
          this.lasttime=setTimeout(()=>{
            this.buyButtonHover='buyButtonHover'
          },500)
        }
        var num=parseInt(myDate.getSeconds()*1000) + parseInt(myDate.getMilliseconds())
        this.lasttime=sum
      },
      //顶部购买按钮滑入时绑定的类由null变化为buyButtonHover
      mouse(){
        var myDate = new Date();
        var sum=parseInt(myDate.getSeconds()*1000) + parseInt(myDate.getMilliseconds())
        console.log(sum-this.lasttime)
        if(sum-this.lasttime>500){
          this.buyButtonHover=null
        }else{
          this.lasttime=setTimeout(()=>{
            this.buyButtonHover=null
          },500)
        }
        var num=parseInt(myDate.getSeconds()*1000) + parseInt(myDate.getMilliseconds())
        this.lasttime=num
      }
    },
    mounted() {
      var parent=document.querySelector('.top-nav')
      var moveFun=(e)=>{
        if(this.hiddenHeight==true && !parent.contains(e.target)){
          this.hiddenHeight=false
          this.topbackcolor2=''
        }
      }
        document.addEventListener('click',moveFun)


        document.onscroll=()=>{
            var scrolltop=document.documentElement.scrollTop
            if(scrolltop!=0){
              this.topbackcolor='topbackcolor'
            }else{
              this.topbackcolor=null
            }
        }

    }
  };
</script>

<style scoped>
.logo {
    max-width: 100%;
    height: auto;
    cursor: pointer
}
  div{
    font-size: 16px;
  }
  button{
    font-size: 16px;
  }
.top-nav{
  position:fixed;
  width: 100%;
  height: 80px;
  transition: all .5s;
  z-index: 99;
}
.top-wrap{
  width: 60%;
  max-width: 1100px;
  height: 100%;
  color: #FFFFFF;
}
.topbackcolor{
  background-color:rgb(27,27,27);
}
.topbackcolor2{
  background-color:rgb(27,27,27);
}
.topHover{
  background-color:rgb(0,0,0);
}
.nav-cen{
  width: 400px;
  height: 100%;
}
.allproduct{
  top:-16px
}
.nav-text{
  width: 100px;
  height: 100%;
  cursor: pointer;
}
.nav-cen-line{
  width: 100%;
  height: 20px;
  transition: all 0.2s;
}
.nav-text:hover .line-one{
  margin-top: 5px;
}
.hline{
  width: 10px;
  height: 2px;
  background-color: #fff;
}
.free,.buy{
  height: 38px;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
}
.free{
  position: relative;
  width: 132px;
  background-color: red;
  border-radius: 19px;
  color: #FFFFFF;
  transition: all 0.5s;
}
.freeButtonHover{
  width: 112px;
}
.button-svg1{
  width: 15px;
  height: 15px;
  position: absolute;
  right: 23px;
  top: 50%;
  transform: translateY(-50%);
  fill: #FFFFFF;
  transition: all .3s
}
/* .button-svg2{
  width: 68%;
  height: 68%;
} */
.fade-enter,.fade-leave-to{
    right: 60px;
    opacity: 0;
}
.fade-enter-to,.fade-leave /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 1;
    right: 23px;
}
/*过度动画*/
.buy{
  width: 64px;
  background-color:rgba(0,0,0,0);
  transition: all 0.3s linear;
}
.buyButtonHover{
  width: 38px;
}
.top-hidden{
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
  left: 0;
  top:80px;
  background-color: #000000;
  z-index: 2;
}
.hiddenHeight{
  height: 360px;
}
.top-hidden-text{
  width: 60%;
  max-width: 1100px;
}
.top-hidden-two,.top-hidden-therr{
  width: 136px;
  height: 164px;
  background-color: #1B1B1B;
  margin-left: 10px;
  transition: all 0.3s;
  margin-top: 36px;
  border-radius: 12px;
}
.top-hidden-one{
  position: relative;
  width: 336px;
  height: 200px;
  transition: all 0.3s;
  cursor: pointer;
}
.hidden-button{
  position: absolute;
  bottom: 28px;
  left: 12px;
  width: 88px;
  height: 22px;
  font-size: 12px;
  border-radius: 11px;
  background-color: #fff;
  color: #235FE7;
  border: 1px solid rgba(0,0,0,0);
  transition: all 0.3s;
}
.top-hidden-icon{
  width: 47px;
  height: 47px;
}
.iconCen-one{
  width: 10px;
  height: 5px;
}
.top-hidden-one:hover .hidden-button{
  bottom: 33px;
}
.top-hidden-two:hover,.top-hidden-therr:hover{
  margin-bottom: 20px;
}
/* 顶部样式 */
.cd{
  background-color: #000000;
  /* background: linear-gradient(53deg, #ffa665, #c389ff, #36acff 110%); */
}
</style>
