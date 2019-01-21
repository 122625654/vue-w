<template>
  <!-- 手机图片 -->
  <div class="goodslist">
    <!-- 手机列表 -->
    <div class="goods-item" v-for="item in iphon" :key="item.id" @click="getid(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <!-- 加载更多 -->
    <van-button plain type="danger" @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
// 请提示
import { Toast } from "vant";

export default {
  data: () => ({
    //   传的页码
    pageindex: 1,
    // 手机数组
    iphon: [],
    limit:3,
  }),
  created() {
    //   调用手机图片发送ajax请求
    this.getiphon();
  },
  methods: {
    //   请求手机图片
    async getiphon() {
      const result = await this.$http.get(
        "api/getgoods/?pageindex=" + this.pageindex+"&pageNum="+this.limit
      );
      //   console.log(result);
      //   结构
      const {
        status,
        data: { message }
      } = result;
      // 判断苹果图片
      if (status === 200) {
          // 只有合并数组才能自动刷新
        this.iphon =this.iphon.concat(message)
      } else {
        Toast("请求数据");
      }
    },
    // 加载更多
    async getMore(){
      // 点击加载更多
      this.pageindex++;
        // 调用手机列表
        this.getiphon();
      
    },
    // 点击跳转页面
    getid(id){
     this.$router.push({ path: '/home/goodsinfo/'+id})
    }
  }
};
</script>

<style  lang="less" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  // 两边对齐中间留空格
  justify-content: space-between;

  .goods-item {
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    // 默认x 轴
    // 设置为column 改为 y轴
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
  .van-button{
    width:100%;
  }
}
</style>