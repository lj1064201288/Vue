<template>
  <div class="container">
<!--    <div class="btn btn-default" @click="runInv">打开定时器</div>-->
    <div class="item">
      <img :src="dataList[currentIndex]">
    </div>
    <div class="page" v-if="this.dataList.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data: () => {
    return {
      dataList:["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
      currentIndex: 0,   //默认显示图片
      timer: null    //定时器
    }
  },
  methods: {
    gotoPage(index) {
      clearInterval(this.timer);
      this.runInv()
      this.currentIndex = index;
    },
    //定时器
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    }

  },
  computed: {
    //上一张
    prevIndex() {
      if(this.currentIndex == 0) {
        clearInterval(this.timer);
        this.runInv()
        return this.dataList.length - 1;
      }else{
        clearInterval(this.timer);
        this.runInv()
        return this.currentIndex - 1;

      }
    },
    //下一张
    nextIndex() {
      if(this.currentIndex == this.dataList.length - 1) {
        clearInterval(this.timer);
        this.runInv()
        return 0;
      }else {
        clearInterval(this.timer);
        this.runInv()
        return this.currentIndex + 1;
      }
    }
  },
  mounted() {
    this.runInv();
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  margin-top: 100px;
}

ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: black;
  font-size: 14px;
}

.banner img {
  width: 100%;
  display: block;
}
.banner .page {
  background: rgba(0,0,0,.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
img {
  width: 100%;
  height: 100%;
}

</style>
