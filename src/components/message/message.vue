<template>
    <div>
        <mt-field label="计算" placeholder="输入要计算的值" type="tel" v-model="number"></mt-field>
        <br>
        <mt-button size="large" type="primary" @click="getList">点我出结果</mt-button>
        <br>
        <br>
        <mt-cell-swipe title="婷婷" v-for="item in total">{{item.type}}</mt-cell-swipe>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                number:null,
                total:[]
            }
        },
        methods:{
            getList(){
                this.axios.get('/test/list/'+this.number).then((response) => {
                    this.total = response.data;
                    if(response.data.length == 0){
                       alert('婷婷，算不出来！')
                    }
                }).catch((error=>{
                    console.log(error)
                }))
            }
        }
    }
</script>