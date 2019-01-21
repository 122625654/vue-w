<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="mage in imgs" :key="mage.img">
        <img :src="mage.img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["imgs"]
};
</script>

<style lang="less">
@width: 100%;
.swipe {
  .van-swipe-item {
    img {
      width: @width;
      height: 260px;
    }
  }
}
</style>