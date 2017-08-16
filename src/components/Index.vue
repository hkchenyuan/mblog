<template>
    <div>
        <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="">
            李
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="">
            岳
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="">
            群
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="">
            最
        </mt-tab-item>
        <mt-tab-item id="tab5">
            <img slot="icon" src="">
            帅
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

