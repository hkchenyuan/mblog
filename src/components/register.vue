<template>
    <div style="text-align: center;">
        <img src="../assets/icon/huaji.jpg" alt="" style="margin:0 auto" height="250">
        <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="验证码" v-model="captcha">
            <a @click="sendMessage()" href="javascript:;">{{msg}}</a>
        </mt-field>
        <br>
        <mt-button type="primary" size="large">注册</mt-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'点击发送验证码',
                phone:'',
                captcha:'',
                seconds:60,
            }
        },
        methods:{
            validCode(){
                if (this.seconds > 0) {
                    this.seconds--;
                    this.msg= this.seconds+'s重新发送';
                    setTimeout(this.validCode,1000);
                }else{
                    this.msg= '点击发送验证码';
                    this.seconds=60;
                }
            },
            sendMessage(){
                if (this.seconds ==60) {
                    this.axios.post('/sendmessgae',{phone:this.phone}).then((response) => {
                        console.log(response.data)
                        if(response){
                            this.validCode();
                        }
                    }).catch((error=>{
                        console.log(error)
                    }))

                }
            }

        }

    }
</script>
<style>
    a{
        text-decoration: none;font-size: 17px;color: #333333;
    }
</style>