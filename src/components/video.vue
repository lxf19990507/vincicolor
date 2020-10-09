<template>
  <video muted loop autoplay playsinline="true">
    <source :src="videoUrl" type="video/mp4">
  </video>
  <!-- <video class="mobiletestvideos" ref='test' src="@/assets/01.mp4" width="100%" height="auto" preload="auto"  autoplay muted loop
     playsinline="true"
     ></video> -->
</template>

<script>


export default {
  props:{
    videoUrl:null,
    only:null
  },
  data(){
    return {
      
      istrue:false
    }
  },
  watch:{
    
  },
  methods:{
    play(isref){
      this.$refs[isref].play()
    },
    pause(isref){
      this.$refs[isref].pause()
    }
  }
}
</script>

<style>
</style>
