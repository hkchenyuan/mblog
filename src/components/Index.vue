<template>
    <div>
        <router-view></router-view>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="index" >
                <img slot="icon" @click="routerFun(0)" src="../assets/icon/index.png">
                <span style="color: #26A2FF;">首页</span>
            </mt-tab-item>
            <mt-tab-item id="message">
                <img slot="icon" @click="routerFun(1)" src="../assets/icon/message.png">
                <span style="color: #26A2FF;">消息</span>
            </mt-tab-item>
            <mt-tab-item id="add">
                <img slot="icon" @click="routerFun(2)" src="../assets/icon/add.png">
            </mt-tab-item>
            <mt-tab-item id="find">
                <img slot="icon" @click="routerFun(3)" src="../assets/icon/find.png">
                <span style="color: #26A2FF;">发现</span>
            </mt-tab-item>
            <mt-tab-item id="user">
                <img slot="icon" @click="routerFun(4)" src="../assets/icon/user.png">
                <span style="color: #26A2FF;">我</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App',
            selected:'user',
        }
    },
    methods:{
        routerFun(value){
            var routers = [];
            routers[0] = "/wbIndex";
            routers[1] = "/message";
            routers[2] = "";
            routers[3] = "/find";
            routers[4] = "/myinfo";
            this.$router.push({path:routers[value]});
        }
    },
    mounted(){

    }
}
</script>

