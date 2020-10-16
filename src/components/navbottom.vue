<template>
  <div class="bottom-nav w100 f-center f-arrayY">
    <div class="bottom-wrap f-arrayX">
      <div class="all-product w25 f-arrayY">
        <p class="mt85 mbottom30 fwe8 f-size18">所有产品</p>
        <a :href="allpro.url" target="_blank" class="hover mt5 f-size16" v-for="allpro in products">{{allpro.name}}</a>
      </div>
      <div class="product-support w25 f-arrayY">
        <p class="mt85 mbottom30 fwe8 f-size18">产品支持</p>
        <a :href="supportval.url" target="_blank" class="hover mt5 f-size16" v-for="supportval in support">{{supportval.name}}</a>
      </div>
      <div class="about-us w25 f-arrayY">
        <p class="mt85 mbottom30 fwe8 f-size18">关于我们</p>
        <p class="hover mt5 f-size16" v-for="aboutval in about">{{aboutval.name}}</p>
        <!-- <a target="_blank" :href="aboutval.url" class="hover mt5 f-size16" v-for="aboutval in about">{{aboutval.name}}</a> -->
      </div>
      <div class="contact-us w25 f-arrayY">
        <p class="mt85 mbottom30 fwe8 f-size18">联系我们</p>
        <a :href="contactval.url" class="hover mt5 f-size16" v-for="contactval in contact">{{contactval.name}}</a>
        <div class="bottom-svg mt18 f-arrayX ">
          <div class="bottom-svg-wrap mt15 f-arrayY f-center" v-for="(imgval,i) in imgs" :key='i'>
            <img class="about" :src="imgval.urlb" v-show="imgLi==i"/>
            <img v-if="i!=1" v-bind:src="imgval.url"  @mousemove="img($event,i)" @mouseout="imgLi=null" class="bottom-img"/>
            <a target="_blank" v-else href="https://www.zcool.com.cn/u/19636182"><img v-bind:src="imgval.url"  @mousemove="img($event,i)" @mouseout="imgLi=null" class="bottom-img"/></a>
          </div>
        </div>
      </div>
    </div>
    <div class="icp f-center f-arrayY">
      <p class="color-white">©2020 广州马斯克摄影设计有限公司 版权所有</p>
      <p class="color-white"><a class="color-white" href="www.beian.miit.gov.cn">粤ICP备19024269号</a></p>
    </div>
  </div>
</template>

<script>
  // import topnav from './top.vue'
  export default {
    components:{
      // topnav
    },
    data() {
      return {
        imgLi:null,//底部图标显示
        products:[
          {name:'设计助理',url:'https://pszhuli.com/'},
          {name:'设计助理 - 达芬奇配色',url:'http://vinci.pszhuli.com/'},
          {name:'设计助理 - 模版商城',url:'https://mb.pszhuli.com/'},
          {name:'设计助理 - iconfont',url:'http://icon.pszhuli.com/'},
          {name:'设计助理 - 智能参考',url:'https://ck.pszhuli.com/'}
        ],
        support:[
          {name:'用户协议',url:'https://pszhuli.com/team/agreement'},
          {name:'隐私政策',url:'https://pszhuli.com/team/privacy'}
        ],
        about:[
          {name:'敬请期待',url:''},

        ],
        contact:[
          {name:'邮箱:kf@pszhuli.com',url:''},
          {name:'微信:DesignAsst',url:''}
        ],
        imgs:[
          {class:'',url: require('../assets/img/bottomnav/微信ICON.svg'),urlb:require('../assets/img/bottomnav/微信二维码.png')},
          {class:'',url: require('../assets/img/bottomnav/站酷ICON.svg'),urlb:''},
          {class:'',url: require('../assets/img/bottomnav/抖音ICON.svg'),urlb:require('../assets/img/bottomnav/抖音二维码.png')}
        ]/* 底部导航数据 */
      }
    },
    methods:{
      img(e,val){
        this.imgLi=val
      }
    },
    mounted(){
    }
  };
</script>

<style scoped>
.bottom-nav{
    background-color: #1B1B1B;
}
.bottom-wrap{
  width: 1100px;
  height: 380px;
  color: #fff;
}
.contact-us{
  position: relative;
}
.bottom-svg-wrap{
  position: absolute;
  width: 130px;
}
.bottom-svg-wrap img{
  position: absolute;
}
.bottom-svg-wrap a{
  width: 32px;
  height: 32px;
  position: absolute;
}
.about{
  top: -183px;
}
.bottom-svg-wrap:nth-child(1){
  left: -49px;
}
.bottom-svg-wrap:nth-child(2){
  left: -9px;
}
.bottom-svg-wrap:nth-child(3){
  left: 31px;
}
.hover{
  color: #DCD7D7;
}
.hover:hover{
  color: #FFFFFF;
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .8s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
.bottom-img{
  cursor: pointer
}
/* 底部样式 */
.icp{
  width: 100%;
  height: 80px;
  border-top: #333333 1px solid;
  font-weight: 200;
}
</style>
