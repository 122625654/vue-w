<template>
  <!-- 图标 -->
  <div>
    <div>
      <van-row>
        <router-link v-for="item in list" :key="item.id" :to="item.to" tag='div'>
          <van-col span="8">
            <div class="nav">
              <img :src="item.src" alt>
              <p>{{item.text}}</p>
            </div>
          </van-col>
        </router-link>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgs: [],
    list: [
      {
        id: 1,
        to: "/home/newslist",
        src: require("../../assets/images/menu1.png"),
        text: "新闻咨询"
      },
      {
        id: 2,
        to: "/home/photolist",
        src: require("../../assets/images/menu2.png"),
        text: "图片分享"
      },
      {
        id: 3,
        to: "/home/goodslist",
        src: require("../../assets/images/menu3.png"),
        text: "商品购物"
      },
      {
        id: 4,
        to: "/home/messaglist",
        src: require("../../assets/images/menu4.png"),
        text: "留言反馈"
      },
      {
        id: 5,

        to: "/home/videlist",
        src: require("../../assets/images/menu5.png"),
        text: "视频专区"
      },
      {
        id: 6,
        to: "/home/contactuslist",
        src: require("../../assets/images/menu6.png"),
        text: "联系我们"
      }
    ]
  })
};
</script>

<style lang='less' scoped>
.van-col {
  text-align: center;
  .nav {
    margin-top: 30px;
    img {
      width: 60px;
      height: 60px;
    }
    p {
      margin-top: 15px;
    }
  }
}
</style>