<template>
    <div>
        <mt-header title="我" fixed>
            <router-link to="/" slot="left">
                <mt-button >添加好友</mt-button>
            </router-link>
            <mt-button  slot="right">设置</mt-button>
        </mt-header>
        <mt-cell title="李岳群"
                 style="margin-top: 52px;padding-bottom: 10px;"
                 to="//github.com"
                 is-link
        >
            <i><img slot="icon" src="../../assets/icon/user.png" width="24" height="24"></i>
            <span>会员</span>
            <img slot="icon" src="../../assets/icon/user.png" style="margin-top: 20px;" width="60" height="60">
        </mt-cell>
        <mt-cell title="新的好友"
                 style="margin-top: 10px;"
                 is-link>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell>



        <mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell><mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell><mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell><mt-cell title="新的好友">
            <span>icon 是图片</span>
            <img slot="icon" src="../../assets/icon/user.png" width="24" height="24">
        </mt-cell>

    </div>
</template>
<style>
    .kongxi{
        height: 100px;
    }
</style>
<script>
export default{
    data(){
        return {
            title:'hello world'
        }
    }
}
</script>