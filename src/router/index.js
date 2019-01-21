import Vue from 'vue'

// 1.引入 vue-router
import Router from 'vue-router'

// 引入首页组件
import Home from '@/components/tabbar/Home.vue'

// 引入会员
import Member from '@/components/tabbar/Member.vue'

// 引入购物车
import Cart from '@/components/tabbar/Cart.vue'

// 引入搜索
import Search from '@/components/tabbar/Search.vue'

// 引入新闻
import NewsList from '@/components/newslist/Newslist.vue'

// 引入新闻评论
import Newinfo from '@/components/newslist/Newinfo.vue'

// 引入图片分享
import Photolist from '@/components/photolist/Photolist.vue'

// 引入图片评论
import Photoinfo from '@/components/photolist/Photoinfo.vue'

// 引入商品购买
import Goodslist from '@/components/goodslist/Goodslist.vue'

// 引入分页
import Goodsinfo from '@/components/goodslist/Goodsinfo.vue'

// 3.注册
Vue.use(Router)

// 4.实例化   new Router
export default new Router({
  // 5.定义路由规则
  routes: [{
      path: '/',
      redirect: "Home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newinfo/:id',
      component: Newinfo
    },
    {
      path: '/home/photolist',
      component: Photolist
    },
    {
      path: '/home/photoinfo/:id',
      component: Photoinfo
    },
    {
      path:'/home/goodslist',
      component: Goodslist
    },
    {
      path:'/home/goodsinfo/:id',
      component: Goodsinfo
    }
  ]

})
