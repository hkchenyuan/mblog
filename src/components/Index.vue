<template>
    <div>
        <mt-header title="" fixed>
            <router-link to="/register" slot="left">
                <mt-button >添加好友</mt-button>
            </router-link>
            <router-link to="/login" slot="right">
                <mt-button>彩蛋</mt-button>
            </router-link>
        </mt-header>
        <div style="margin-top: 15%;">
            <router-link :class="indexA1" v-on:click.native="indexU(1)" to="/wbIndex">首页</router-link>
            <router-link :class="indexA2" v-on:click.native="indexU(2)" to="/message">消息</router-link>
            <router-link :class="indexA3" v-on:click.native="indexU(3)" to="/find">发现</router-link>
            <router-link :class="indexA4" v-on:click.native="indexU(4)" to="/myinfo">我</router-link>
        </div>

        <router-view style="clear: both;display: block"></router-view>
        <!--<mt-tabbar v-model="selected" fixed>
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
        </mt-tabbar>-->
    </div>
</template>
<style>
    .index_a{
        text-decoration: none;
        color: #5a5a5a;
        width:25%;
        font-weight:700;
        text-align:center;
        line-height:40px;
        display: block;
        position: relative;
        float: left;
    }
    .is_Active{
        font-size: .9275rem;
        color: #ff8200;
    }
    .is_Active:before{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #FF8200;
    }

</style>
<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            selected:'user',
            indexA1:'index_a',
            indexA2:'index_a',
            indexA3:'index_a',
            indexA4:'index_a',
        }
    },
    methods:{
        indexU(value){
            if(value==1){
                this.indexA1 += ' is_Active';this.indexA2 = 'index_a';this.indexA3 = 'index_a';this.indexA4 = 'index_a';
            }if(value==2){
                this.indexA2 += ' is_Active';this.indexA1 = 'index_a';this.indexA3 = 'index_a';this.indexA4 = 'index_a';
            }if(value==3){
                this.indexA3 += ' is_Active';this.indexA1 = 'index_a';this.indexA2 = 'index_a';this.indexA4 = 'index_a';
            }if(value==4){
                this.indexA4 += ' is_Active';this.indexA1 = ' index_a';this.indexA2 = ' index_a';this.indexA3 = 'index_a';
            }
        }
    },
    mounted(){
        this.$router.push({path:'/message'});
        this.indexA2 += ' is_Active';
    }
}
</script>

