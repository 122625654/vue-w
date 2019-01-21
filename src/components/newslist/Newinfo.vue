<template>
  <div class="info">
    <!-- 详细 -->
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | tiem }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
  <div class="content">{{newsinfo.content}}</div>
    <!-- 内容 -->
    <Content :id="id"></Content>
  </div>
</template>

<script>
// 轻提示
import { Toast } from "vant";

// 引入内容子组件
import Content from '../subassembly/Content'


export default {
  data: () => ({
    id: "",
    newsinfo:{}
  }),
  created() {
    this.id = this.$route.params.id;
    this.NewsInfo();
  },
  methods: {
    async NewsInfo() {
      const result = await this.$http.get("/api/getnew/"+this.id);
      // console.log(result);
      const {status,data:{message}}=result;

      if(status===200){
        this.newsinfo=message;
      }else{
        Toast('news数据请求失败')
      }
      
    }
  },
  // 挂载内容子组件
  components:{
    Content
  }
};
</script>

<style  lang="less" scoped>
.info {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>