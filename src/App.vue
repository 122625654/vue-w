<template >
  <div class="app">
    <!-- <router-link to='/member'>首页</router-link> -->
    <!-- 头部 -->
    <van-nav-bar title="主页" left-text="返回" left-arrow @click-left="fanhui"/>
    <!-- 内容 -->
    <!-- 7.渲染 -->
    <!-- <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft"  :duration="{ enter: 1000, leave: 500 }">
       <router-view class="animated" ></router-view>
    </transition>-->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 尾部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="$store.getters.add" to="/cart" id="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      active: 0
    };
  },
  methods: {
    fanhui(){
      this.$router.go(-1)
    }
  },
};
</script>
<style lang='less'>
* {
  padding: 0;
  margin: 0;
}

@clolor: yellowgreen;
.van-nav-bar {
  background: @clolor;
}

// 插件动画
.app{
  overflow-x: hidden;
  padding-bottom: 60px;
}

// .v-leave-to{
//   position: absolute;
//   left: -200%;

// }

// 原生动画
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
  left: -200%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
