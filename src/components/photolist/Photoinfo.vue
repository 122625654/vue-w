<template>
  <div class="photoinfo">
    <!-- 详细 -->
    <!-- 大标题 -->
    <h3 class="title">{{ alltitle.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ alltitle.add_time |tiem }}</span>
      <span>点击：{{ alltitle.click }}次</span>
    </p>
    <hr>
    <div class="content">{{alltitle.content}}</div>

    <!-- 图片预览  -->
    <div class="imgs">
      <img v-for="(items,i) in list" :key="i" :src="items.src" alt @click="img(i)">
    </div>
    
  <!-- 内容 -->
  <ContentImg :id='id'></ContentImg>
  </div>

</template>

<script>
// 请提示
import { Toast } from "vant";

// 图片预览
import { ImagePreview } from "vant";

// 引入组件
import ContentImg from '../subassembly/ContentImg.vue';

export default {
  data: () => ({
    id: "",
    // 获取info
    alltitle: {},
    // 图片
    list: []
  }),
  created() {
    // 获取地址栏id
    this.id = this.$route.params.id;
    // 获取info
    this.getAllimg();
    // 获取图片
    this.getimgs();
  },
  methods: {
    //   获取titel
    async getAllimg() {
      const result = await this.$http.get("api/getimageInfo/" + this.id);
      //    console.log(result)
      //    解构
      const {
        status,
        data: { message }
      } = result;
      // 判断
      if (status === 200) {
        this.alltitle = message;
        // console.log(message);
      } else {
        Toast("获取评论信息失败");
      }
    },
    // 获取图片
    async getimgs() {
      const result = await this.$http.get("api/getthumimages/" + this.id);
      // console.log(result);
      // 解构
      const {
        status,
        data: { message }
      } = result;
      // 判断
      if (status === 200) {
        this.list = message;
        // console.log(message)
      } else {
        Toast("获取预览图片失败");
      }
    },
    // 预览
    img(startPosition) {
      let images = [];  //数组文档要求
      this.list.forEach(item => {//循环
        if (item.src != null) {
          images.push(item.src);//把图片追加到images中
        }
      });
    //   图片预览
      ImagePreview({
        images: images,
        startPosition  
      });
    }
  },
//   注册组件
components:{
    ContentImg
}
};
</script>

<style lang="less"  scoped>
.photoinfo {
  .imgs {
    img {
      width: 30%;
      height: 100px;
      margin-left: 9px;
    }
  }
}
</style>