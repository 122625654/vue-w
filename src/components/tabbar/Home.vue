<template>
  <div>
    <!-- 轮播图 -->
    <Swipe :imgs="imgs"></Swipe>

    <Comtion class="dv"></Comtion>
  </div>
</template>

<script>
// 请提示按钮
import { Toast } from "vant";

// 引入6张图片组件
import Comtion from '../subassembly/img';
// 引入轮播图组件
import Swipe from '../subassembly/Swipe';

export default {
   data: () => ({
     imgs:[]
   }),
  created() {
    //   调用函数发送ajax请求
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http.get("api/getlunbo").then(
        res => {
          // console.log(res);
          // 解析
          const {
            status,
            data: { message }
          } = res;

          if (status == 200) {
            // console.log(message);
            // Toast("提示内容");
            this.imgs = message;
          } else {
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  components:{
    Comtion,
    Swipe
  }
};
</script>

<style  lang='less'  scoped>
@import "../../assets/css/Home.less";
</style>