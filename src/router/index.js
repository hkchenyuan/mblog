import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

//userinfo
import myInfo from '@/components/userinfo/myinfo.vue'
import message from '@/components/message/message.vue'
import wbIndex from '@/components/index/wbIndex.vue'
import find from '@/components/find/find.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/myInfo',
                    name: 'myInfo',
                    component: myInfo,
                }, {
                    path: '/message',
                    name: 'message',
                    component: message,
                }, {
                    path: '/wbIndex',
                    name: 'wbIndex',
                    component: wbIndex,
                }, {
                    path: '/find',
                    name: 'find',
                    component: find,
                },
            ],
        },
    ]
})
