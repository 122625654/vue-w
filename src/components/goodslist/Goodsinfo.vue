<template>
  <div class="goodsinfo">
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in show" :key="i">
          <img :src="item.src" alt>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 展示 -->
    <div class="show">
      <h1>荣耀</h1>
      <hr>
      <p>
        市场价格:
        <span>1000</span>
        销售价格:
        <span>998</span>
      </p>
      <p class="show-goumai">购买数量:
        <van-stepper
          v-model="$store.state.count"
          integer
          :min="1"
          :max="40"
          :step="1"
          @plus="plus"
          @minus="minus"
        />
      </p>
      <div clss="show-button">
        <van-button type="warning">立即购买</van-button>
        <van-button type="danger" @click="gettime" :disabled="disabled">加入购入车</van-button>
      </div>
    </div>
    <!-- 球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="qiu" v-show="flag" ref="ball"></div>
    </transition>

    <!-- 详情 -->
    <div class="detail">
      <h1>商品参数</h1>
      <hr>
      <p>
        商品货号:
        <span>SD3344444</span>
      </p>
      <p>
        库存情况:
        <span>10件</span>
      </p>
      <p>
        上架时间:
        <span>1018-07-15</span>
      </p>
    </div>
    <!-- 图片按钮 -->
    <div class="imgbutton">
      <van-button plain type="primary">图片介绍</van-button>
      <van-button plain type="danger">商品评论</van-button>
    </div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
</template>

<script>
// 轻提示
import { Toast } from "vant";

export default {
  data() {
    return {
      value: 1,
      id: "",
      show: [],
      // goodsinfo,
      flag: false,
      disabled: false
    };
  },

  created() {
    // 获取地址栏的id
    this.id = this.$route.params.id;

    //  获取展示图片请求数据
    this.showShou();
  },
  methods: {
    async showShou() {
      let id = parseInt(this.id) + 100;
      const result = await this.$http.get("/api/getthumimages/" + id);
      // console.log(result);
      // 解构
      const {
        status,
        data: { message }
      } = result;
      // 判断返回的值是不是成功的
      if (status === 200) {
        this.show = message;
        // console.log(message)
      } else {
        Toast("图片请求失败");
      }
    },
    // 加
    plus() {},
    // 减
    minus() {},
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetHeight; //会强制刷新

      // 球的距离  上   下    左   右
      const ball = this.$refs.ball.getBoundingClientRect();
      // console.log(ball);
      // 购物车    上  下  左  右
      const cart = document
        .querySelector("#cart .van-info")
        .getBoundingClientRect();
      const x = cart.left - ball.left;
      const y = cart.top - ball.top;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 1s cubic-bezier(0.25, 0.18, 0.73, 0.01)";
      // 自动隐藏调用函数
      done();
    },
    afterEnter() {
      this.flag = !this.flag;
    },
    // 点击加入购物车
    gettime() {
      var goodsinfo = {
        id: this.id,
        count: 1,
        price: 998,
        selected: true,
        timer: null
      };
      // 调用  store 中 mutations 来将商品加入购物车
      this.$store.commit("add", goodsinfo);
      // 点击加入购物车去反
      this.disabled = !this.disabled;
      setTimeout(() => {
        // 点击加入购物车反
        this.disabled = !this.disabled;
      }, 1200);
      // 球显示与隐藏
      this.flag = !this.flag;
    }
  }
};
</script>

<style  lang="less" scoped>
.goodsinfo {
  .carousel {
    img {
      width: 100%;
      height: 190px;
    }
  }
  .show {
    .show-goumai {
      display: flex;
    }
  }
  .qiu {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: 312px;
    left: 121px;
    z-index: 99;
  }
}
</style>