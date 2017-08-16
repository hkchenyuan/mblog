<template>
    <div>
        <router-view></router-view>
        <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="../assets/icon/index.png">
            <span style="color: #26A2FF;">首页</span>
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="../assets/icon/message.png">
            <span style="color: #26A2FF;">消息</span>
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="../assets/icon/add.png">
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="../assets/icon/find.png">
            <span style="color: #26A2FF;">发现</span>
        </mt-tab-item>
        <mt-tab-item id="tab5">
            <img slot="icon" src="../assets/icon/user.png">
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
        selected:[],
    }
  }
}
</script>

