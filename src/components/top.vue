<template>
  <div class="top-wrap f-baseY" :class="topback">
    <div class="context-wrap f-baseX">
      <div class="f-space">
        <router-link to="/" tag="a"><slot name="logo"></slot></router-link>
      </div>
      <!-- -->
      <div class="center f-baseX h100" @click.stop=''>
        <a target="_blank" :href="(i==1 || i==2)&&routerUrl[i]" class="center-text f-baseY f-center h100" v-for="(site,i) in navtext" :key='i' @mousemove="line=i" @mouseout="line=-1" @click="open(i)">
          <div>{{site}}</div>
          <div class="mark-wrap f-center" v-if="i==0"><img class="mark" src="@/assets/img/topnav/mark.svg" /></div>
          <div class="mark-wrap f-center" v-else-if="line==i"><img class="mark" src="@/assets/img/topnav/markline.svg" /></div>
        </a>
      </div>
      <!--  -->

      <!-- -->
      <div class="f-space f-rightX f-baseX">
        <router-link to="/buy" tag="button" class="log cursor" :style="{color:backstate!=0 || !topHidden ?'#000000':''}">
          <slot name="button1" >个人中心</slot>
        </router-link>
        <button class="short cursor" :class="$route.path=='/buy'?'buyshort':''" >购买</button>
      </div>
      <!--  -->
    </div>

    <div class="hidden-wrap f-baseY f-center" :class="topHidden?'':'hidden-show'">
      <div class="hidden-context f-bottomY h100">
        <a target="_blank" href="https://pszhuli.com/" class="hidden-contextone cursor">
          <p class="allproduct">所有产品</p>
          <img style="width: 336px;height: 200px;" src="@/assets/img/topnav/hiddenone.png" />
          <!-- <button class="hiodden-button">点击了解</button> -->
        </a>

        <a target="_blank" :href="site.url" class="card f-center f-baseY" v-for="(site,i) in cardval" :key='i'>
          <img style="width: 47px;" :src="site.svg" />
          <p class="cardp1">{{site.text1}}</p>
          <p class="cardp2">{{site.text2}}</p>
        </a>

      </div>
    </div>
	<div v-show="false">{{backstate}}</div>
  </div>

</template>

<script>
import {store} from '@/store/store.js'

export default {
  data() {
    return {
      topHidden:true,
      line: -1,
	  topback:null,
      navtext: ["产品中心", "搜图导航", "使用帮助", "联系我们"],
      navIndex: ["center1", "center2", "center3", "center4"],
      routerUrl: [
        "",
        "https://www.91sotu.com/",
        "https://ck.pszhuli.com/help/",
        "",
      ],
      cardval: [
        {
          text1: "设计助理",
          text2: "达芬奇配色",
          svg: require("@/assets/img/topnav/hiddentwo.svg"),
          url: "http://vinci.pszhuli.com/",
        },
        {
          text1: "设计助理",
          text2: "模版商城",
          svg: require("@/assets/img/topnav/hiddenthird.svg"),
          url: "https://mb.pszhuli.com/",
        },
        {
          text1: "设计助理",
          text2: "下载图标",
          svg: require("@/assets/img/topnav/installIcon.svg"),
          url: "http://icon.pszhuli.com/",
        },
        {
          text1: "设计助理",
          text2: "智能参考",
          svg: require("@/assets/img/topnav/cankao.svg"),
          url: "/",
        },
      ],
    };
  },
  computed:{
	  backstate(newV,oldV){
		  store.state.setTop==0?(this.topback=null):(this.topback='topback')
		  return store.state.setTop
	  }
  },
  methods: {
    open(val) {
      if (val == 0) {
		this.topHidden=!this.topHidden
		this.topHidden?(this.topback=null):(this.topback='topback')
        return;
      }
      if (val == 3) {
        var scrolltop = document.documentElement.scrollTop;
        document.documentElement.scrollTop = 99999;
      }
    },
  },
  mounted() {
	   
  },
};
</script>
<style scoped>
.top-wrap {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  z-index: 999999;
}
.topback{
	background-color: #1B1B1B;
}
.context-wrap {
  display: flex;
  width: 85%;
  max-width: 1200px;
  height: 100%;
}
.center-text {
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin: 0 20px;
}
.mark-wrap {
  position: relative;
}
.mark {
  position: absolute;
  top: 4px;
  transition: all 0.2s;
}
.center-text:nth-child(1):hover .mark {
  top: 10px;
}
.log {
  width: 132px;
  height: 38px;
  background: #FFFFFF;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  color: #2BD7FE;
}
.buylog {
  background-color: #fff;
  color: #046cff;
}
.short {
  width: 64px;
  height: 38px;
  background: rgba(0, 0, 0, 0);
  border-radius: 6px;
  border: 1px solid #FFFFFF;
  margin-left: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
}
.buyshort {
  border: 1px solid #fff;
  color: #fff;
}

.hidden-wrap {
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.5s;
  background-color: #000000;
  color: #fff;
  z-index: 9999;
}
.hidden-show {
  height: 300px;
}
.hidden-context {
  width: 85%;
  height: 200px;
  max-width: 1200px;
}
.hidden-contextone {
  position: relative;
  width: 336px;
  height: 200px;
}
.hidden-contextone:hover .hiodden-button {
  bottom: 36px;
}
.allproduct {
  position: absolute;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  color: #fff;
}
.hiodden-button {
  position: absolute;
  width: 88px;
  height: 22px;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0);
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #0f8eff;
  left: 19px;
  bottom: 28px;
  transition: all 0.3s;
}
.card {
  width: 136px;
  height: 164px;
  border-radius: 12px;
  background: #1b1b1b;
  margin-left: 12px;
  /* margin-top: 0px; */
  transition: all 0.3s;
}
.card:hover {
  cursor: pointer;
  transform: translateY(-15px);
}
.cardp1 {
  color: #fff;
  margin-top: 23px;
}
.cardp2 {
  color: #fff;
  margin-top: 5px;
}
</style>
