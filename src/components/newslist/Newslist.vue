<template>
  <!-- 新闻图片 -->
  <div class="news">
    <router-link v-for="(item,i) in imgs" :key="i" :to="'/home/newinfo/'+item.id">
      <van-card  :title="item.title" :thumb="item.img_url">
        <div slot="footer" class="foot">
          <h3>发表时间:{{item.add_time|tiem("YYYY-MM-DD")}}</h3>
          <h4>点了{{item.click}}次</h4>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data: () => ({
    imgs: []
  }),
  created() {
    // 发送ajax请求
    this.NewList();
  },
  methods: {
    //   请求新闻图片
    async NewList() {
      const result = await this.$http.get("api/getnewslist");
    //   console.log(result);
      const {
        status,
        data: { message }
      } = result;
      if (status === 200) {
        this.imgs = message;
        // console.log(message);
      } else {
        Toast("请求图片失败");
      }
    }
  }
};
</script>

<style lang="less"  scoped>
.news {
  .van-card {
    height: 59px;
    .foot {
      color: DeepSkyBlue;
      font-size: 11px;
      h3 {
        position: absolute;
        left: 116px;
        bottom: 2px;
      }
      h4 {
        position: absolute;
        right: 12px;
        bottom: 2px;
      }
    }
  }
}
</style>