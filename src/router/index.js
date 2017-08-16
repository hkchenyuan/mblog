import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

//userinfo
import myInfo from '@/components/userinfo/myinfo.vue'
import message from '@/components/message/message.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'index',
      component: Index,
          children:[
              {
              path: '/myInfo',
              name: 'myInfo',
              component: myInfo,
          },{
              path: '/message',
              name: 'message',
              component: message,
          },
          ],
    },
  ]
})
