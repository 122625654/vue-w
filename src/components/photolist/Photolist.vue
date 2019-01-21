<template>
  <div class="photolist">
      <!-- 请求列表 -->
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="item in cates" :title="item.title"  :key="item.id"></van-tab>
    </van-tabs>
   
   <!-- 渲染图片 -->
  <router-link  v-for="items in imageList" :key="items.id" :to="'/home/photoinfo/'+items.id">
       <img v-lazy="items.img_url">
  </router-link>
  </div>
</template>

<script>
    // 轻提示
    import { Toast } from 'vant';
export default {
  data: () => ({
      active:0,
      cates:[],
      imageList:[]
  }),
  created() {
    //   获取列表
      this.getAllcary()
    //   获取美女图片
    this.getPhotoListByCatedId(0)

  },
  methods:{
    //   获取列表
    async getAllcary(){
        const result= await this.$http.get("api/getimgcategory",);
        // console.log(result);
        // 解构
        const {status,data:{message}}=result;
        // 判断
        if(status===200){
            // 把元素添加到数据的前面
           message.unshift({title:'全部',id:0});
        //    2.把请求的数据赋值给数组
           this.cates=message;
        //    console.log(message)
        }else{
            Toast('获取数据列表错误')
        }

    },
    // 请求图片
    async getPhotoListByCatedId(cateId){
        // 根据 分类Id，获取图片列表
        const result=await this.$http.get('api/getimages/'+cateId);
        const {status,data:{message}}=result;
        // console.log(result)
        if(status===200){
            this.imageList=message;
            // console.log(message)
        }else{
            Toast('美女图片失败')
        }
    },
    // 点击导航栏切换图片
     onClick(index, title) {
           this.getPhotoListByCatedId(index); 
    }

  }
};
</script>

<style  scoped>
</style>